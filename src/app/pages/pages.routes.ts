import { Routes } from '@angular/router';

export const views: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    // canActivate: [checkAuthStatus],
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'library',
    // canActivate: [checkAuthStatus],
    loadComponent: () => import('./library/library.component').then((m) => m.LibraryComponent)
  },
  {
    path: 'book/:id',
    // canActivate: [checkAuthStatus],
    loadComponent: () => import('./book/book.component').then((m) => m.BookComponent)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
