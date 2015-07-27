<% if (ts) { %>/// <reference path="typings/tsd.d.ts" />
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
<% } %><% if (es6 && !ts) { %>import {bootstrap, httpInjectables, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
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
<% } %><% if (es5) { %>var Example = angular
	.Component({
		selector: 'example'
	})
	.View({
		template: '<h1>{{name}}</h1>'
	})
	.Class({
		constructor: function () {
			this.name = '<%= name %>';
		}
	});

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(Example);
});
<% } %>