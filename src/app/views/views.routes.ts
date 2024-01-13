import { Routes } from '@angular/router';

export const views: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'library',
    loadComponent: () => import('./library/library.component').then((m) => m.LibraryComponent)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
