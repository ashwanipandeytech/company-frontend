import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout').then(m => m.Layout),
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.About) },
      { path: 'services', loadComponent: () => import('./features/services/services').then(m => m.Services) },
      { path: 'team', loadComponent: () => import('./features/team/team').then(m => m.Team) },
      { path: 'faq', loadComponent: () => import('./features/faq/faq').then(m => m.Faq) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact) }
    ]
  }
];
