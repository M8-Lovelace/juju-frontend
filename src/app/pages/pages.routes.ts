import { Routes } from '@angular/router';
import { checkAuthStatus } from '../guards/auth.guard';

export const views: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [checkAuthStatus],
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'library',
    canActivate: [checkAuthStatus],
    loadComponent: () => import('./library/library.component').then((m) => m.LibraryComponent)
  },
  {
    path: 'book/:id',
    canActivate: [checkAuthStatus],
    loadComponent: () => import('./book/book.component').then((m) => m.BookComponent)
  },
  {
    path: 'create',
    canActivate: [checkAuthStatus],
    loadComponent: () => import('./create/create.component').then((m) => m.CreateComponent)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
