// #docregion
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }       from './app.component';
import { appRoutingProviders } from './app.routing';

import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { LoginComponent } from './login.component';

import { DialogService }  from './dialog.service';

import { AsyncNgModuleLoader } from './shared/async-ng-module-loader';

import { appRoutes } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HeroesModule,
    CrisisCenterModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    DialogService,
    // Add to main providers
    { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
// #enddocregion
