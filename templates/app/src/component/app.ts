///<reference path="../typings/tsd.d.ts"/>
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import Example from './example/exampleComponent';

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: 'dash-cmpt',
	styles: [`
		.dash__title {
			
		}
		.dash__nav {
			
		}
		.dash__link {
			
		}
	`],
	template: `
		<header>
			<h1 class="dash__title">{{appName | uppercase}}</h1>
			<nav class="dash__nav">
				<a [router-link]="/example">Example</a>
			</nav>
		</header>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		as: 'Example',
		component: Example,
		path: '/example'
	}
])
export default class {
	appName: string;
	constructor () {
		this.appName = 'slushy';
	}
}