/// <reference path="../typings/tsd.d.ts" />
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import {bootstrap, Component, View} from 'angular2/angular2';

@Component({selector: 'test'});
@View({template: '<h1>FUCK</h1>'});
class Test {}

bootstrap(Test);