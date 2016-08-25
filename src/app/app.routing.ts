// #docregion
// #docregion import-router
import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
// #enddocregion import-router

import { loginRoutes,
         authProviders }  from './login.routing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

export function loadCrisisCenter() {
  return require('es6-promise!./crisis-center/crisis-center.module')('CrisisCenterModule');
}

// #docregion lazy-load-crisis-center
export const crisisCenterRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'crisis-center',
    loadChildren: loadCrisisCenter
  }
];

export const appRoutes: Routes = [
  ...loginRoutes,
  ...crisisCenterRoutes
];
// #enddocregion lazy-load-crisis-center

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
