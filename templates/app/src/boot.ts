import {bootstrap, provide} from 'angular2/angular2';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import Example from './component/exampleComponent';

bootstrap(Example, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, {useValue: '/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(e => console.error(e,"\nReport errors at https://github.com/thevelourfog/slush-angular2/issues"));