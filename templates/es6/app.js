import {bootstrap, httpInjectables, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
import {routerInjectables, Router, RouterOutlet, RouteConfigAnnotation as RouteConfig} from 'angular2/router';

@Component({
	selector: 'example'
})
@View({
	template: `
		<h1>{{name}}</h1>
	`
})
class Example {
	constructor() {
		this.name = '<%= name %>';
	}
}
bootstrap(Example, [httpInjectables, routerInjectables]);