// #docregion
// #docregion import-router
import { Routes }   from '@angular/router';
// #enddocregion import-router

import { loginRoutes,
         authProviders }  from './login.routing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

// #docregion lazy-load-crisis-center
export const crisisCenterRoutes: Routes = [

];

export const appRoutes: Routes = [
  ...loginRoutes
];
// #enddocregion lazy-load-crisis-center

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];
