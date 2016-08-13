// #docregion
// #docregion import-router
import { Routes, RouterModule }   from '@angular/router';
// #enddocregion import-router

import { loginRoutes,
         authProviders }  from './login.routing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

import {load} from './shared/async-ng-module-loader';

// #docregion lazy-load-crisis-center
const crisisCenterRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'lazy',
    loadChildren: load(() => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('./crisis-center/crisis-center.module').CrisisCenterModule);
        });
      }))
  },
];

const appRoutes: Routes = [
  ...loginRoutes,
  ...crisisCenterRoutes
];
// #enddocregion lazy-load-crisis-center

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing = RouterModule.forRoot(appRoutes);
