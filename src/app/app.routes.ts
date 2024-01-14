import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then((m) => m.views)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
