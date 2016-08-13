// #docregion
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

import { heroesRoutes } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(heroesRoutes)
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
// #enddocregion heroes-routes
export class HeroesModule {}
// #enddocregion
