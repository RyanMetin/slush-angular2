import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import App from './component/appComponent';

bootstrap(App, [
  HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, {useValue: '/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(e => console.error(e,"\nReport errors at https://github.com/ryanmetin/slush-angular2/issues"));