import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Website Routes
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
  },

  // Console Panel Routes
  {
    path: 'console-panel/login',
    loadComponent: () => import('./features/console/login/login').then(m => m.Login)
  },
  {
    path: 'console-panel',
    loadComponent: () => import('./features/console/layout/layout').then(m => m.ConsoleLayout),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'enquiries', pathMatch: 'full' },
      { path: 'enquiries', loadComponent: () => import('./features/console/enquiries/enquiries').then(m => m.Enquiries) },
      { path: 'clients', loadComponent: () => import('./features/console/clients/clients').then(m => m.Clients) },
      { path: 'projects', loadComponent: () => import('./features/console/projects/projects').then(m => m.Projects) }
    ]
  }
];
