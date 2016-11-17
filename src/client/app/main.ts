
import { enableProdMode } from '@angular/core';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// The app module
import { AppModule } from './app.module';

if (String('<%= BUILD_TYPE %>') === 'prod') { enableProdMode(); }


platformBrowserDynamic().bootstrapModule(AppModule/*, options*/);
