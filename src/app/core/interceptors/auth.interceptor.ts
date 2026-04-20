import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  const token = isBrowser ? localStorage.getItem('admin_token') : null;

  if (isBrowser) {
    console.log(`Interceptor: Checking request for ${req.url}`);
  }

  let clonedRequest = req.clone({
    setHeaders: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  });

  if (req.url.includes('/admin/')) {
    if (token) {
      if (isBrowser) console.log(`Interceptor: Applying token to ${req.url.split('/').pop()}`);
      clonedRequest = clonedRequest.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    } else if (isBrowser) {
      console.warn(`Interceptor: No token found for admin route: ${req.url}`);
    }
  }

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (isBrowser) console.error(`Interceptor: Request to ${req.url} failed with status ${error.status}`);
      if (isBrowser && error.status === 401 && req.url.includes('/admin/')) {
        console.warn('Interceptor: 401 Unauthorized on admin route. Clearing storage and redirecting...');
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        router.navigate(['/console-panel/login']);
      }
      return throwError(() => error);
    })
  );
};
