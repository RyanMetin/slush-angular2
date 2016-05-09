import 'rxjs/Rx';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Title} from '@angular/platform-browser';
import {APP_BASE_HREF, CORE_DIRECTIVES, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PLATFORM_DIRECTIVES, enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import App from './app/app.component';

bootstrap(App, [
  HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
  Title,
	provide(APP_BASE_HREF, { useValue: '/' }),
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(PLATFORM_DIRECTIVES, { useValue: [CORE_DIRECTIVES], multi: true }),
]).catch(e => console.error(e,"\nReport errors at https://github.com/ryanmetin/slush-angular2/issues"));