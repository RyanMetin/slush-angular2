import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import Example from './component/exampleComponent';

bootstrap(Example, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, {useValue: '/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(e => console.error(e,"\nReport errors at https://github.com/thevelourfog/slush-angular2/issues"));