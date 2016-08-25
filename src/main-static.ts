import {AppModuleNgFactory} from './app/app.module.ngfactory';
import {platformBrowser} from '@angular/platform-browser';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
