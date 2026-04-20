import { inject, PLATFORM_ID } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // If we are on the server, allow navigation to proceed.
  // The client-side instance will run the guard again and have access to localStorage.
  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  const token = localStorage.getItem('admin_token');
  if (token) {
    return true;
  }

  // Redirect to login page only on the client-side when token is definitely missing
  router.navigate(['/console-panel/login']);
  return false;
};
