/// <reference path="../typings/tsd.d.ts" />
import {bootstrap, httpInjectables} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';

import {Example} from './example';

bootstrap(Example, [
	httpInjectables,
	routerInjectables
]);
