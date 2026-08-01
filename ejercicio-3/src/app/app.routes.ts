import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'actividades',
    loadComponent: () => import('./pages/actividades/actividades.page').then( m => m.ActividadesPage)
  },
  {
    path: '',
    redirectTo: 'actividades',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'actividades',
  },
];
