import {bootstrap, Title} from 'angular2/platform/browser';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Component, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import App from './component/appComponent';

bootstrap(App, [
  HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
  Title,
	provide(APP_BASE_HREF, {useValue: '/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide(PLATFORM_DIRECTIVES, {useValue: [CORE_DIRECTIVES], multi: true}),
]).catch(e => console.error(e,"\nReport errors at https://github.com/ryanmetin/slush-angular2/issues"));
