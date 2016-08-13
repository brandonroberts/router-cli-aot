// #docplaster
// #docregion
import { Routes }  from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisAdminComponent }  from './crisis-admin.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';
import { AuthGuard }             from '../auth-guard.service';
// #docregion crisis-detail-resolve
import { CrisisDetailResolve }   from './crisis-detail-resolve.service';

// #enddocregion crisis-detail-resolve

// #docregion lazy-load-crisis-center
export const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      // #docregion admin-route
      {
        path: 'admin',
        component: CrisisAdminComponent,
        canActivate: [AuthGuard]
      },
      // #enddocregion admin-route
      // #docregion crisis-detail-resolve
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          crisis: CrisisDetailResolve
        }
      // #enddocregion crisis-detail-resolve
      },
      {
        path: '',
        component: CrisisListComponent
      }
    ]
  }
];
// #enddocregion lazy-load-crisis-center
// #enddocregion
