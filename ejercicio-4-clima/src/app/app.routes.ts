import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'climaCamara',
    loadComponent: () =>
      import('./pages/registro-clima/registro-clima.page')
        .then((m) => m.RegistroClimaPage )
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page')
        .then((m) => m.HomePage)
  },
  {
    path: 'clima',
    loadComponent: () =>
      import('./pages/clima/clima.page')
        .then((m) => m.ClimaPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'registro-clima',
    loadComponent: () => import('./pages/registro-clima/registro-clima.page').then( m => m.RegistroClimaPage)
  },
];