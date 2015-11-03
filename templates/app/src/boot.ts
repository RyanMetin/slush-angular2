///<reference path="typings/tsd.d.ts"/>
import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';

import App from 'appComponent';

bootstrap(App, [
	ROUTER_PROVIDERS
]).catch(e => console.error(e,"\nReport errors at https://github.com/thevelourfog/slush-angular2/issues"));