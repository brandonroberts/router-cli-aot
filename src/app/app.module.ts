// #docregion
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { appRoutingProviders } from './app.routing';

import { HeroesModule } from './heroes/heroes.module';

import { LoginComponent } from './login.component';

import { DialogService }  from './dialog.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
// #enddocregion
