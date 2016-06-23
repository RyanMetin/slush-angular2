import 'rxjs/Rx';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Title} from '@angular/platform-browser';
import {CORE_DIRECTIVES} from '@angular/common';
import {PLATFORM_DIRECTIVES, enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import App from './app/app.component';
import {APP_ROUTER_PROVIDERS} from './app/app.service';

// enableProdMode();
bootstrap(App, [
	APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  Title,
  provide(PLATFORM_DIRECTIVES, { useValue: [CORE_DIRECTIVES], multi: true }),
]).catch(e => console.error(e,"\nReport errors at https://github.com/ryanmetin/slush-angular2/issues"));