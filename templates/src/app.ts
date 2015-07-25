/// <reference path="typings/tsd.d.ts" />
import {bootstrap, httpInjectables, Component, View} from 'angular2/angular2';
import {routerInjectables, Router, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
	selector: 'example'
})
@View({
	template: `
		<h1>{{name}}</h1>
	`
})

class Example {
	name: string;
	constructor() {
		this.name = '<%= name %>';
	}
}

bootstrap(Example, [httpInjectables, routerInjectables]);