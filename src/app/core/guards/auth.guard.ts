import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('admin_token');

  if (token) {
    return true;
  }

  // Redirect to login page if not authenticated
  router.navigate(['/console-panel/login']);
  return false;
};
