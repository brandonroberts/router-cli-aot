import {AppModuleNgFactory} from './app/app.module.ngfactory';
import {browserPlatform} from '@angular/platform-browser';

browserPlatform().bootstrapModuleFactory(AppModuleNgFactory);
