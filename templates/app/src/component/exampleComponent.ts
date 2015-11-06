///<reference path="../typings/tsd.d.ts"/>
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DragDirective} from 'exampleDirective';
import {CapitalizePipe} from 'examplePipe';

@Component({
	selector: 'home-component',
	styles: [`.home { padding: 4% 8%; }`],
	template: `<h1 class="home">Welcome to Angular2</h1>`
})
class HomeComponent {}

@Component({
	directives: [DragDirective],
	selector: 'drag-component',
	styles: [`
		[drag-directive] {
			position: relative;
			left: 24px;
			top: 24px;
		}
	`],
	template: `
		<img drag-directive src="https://raw.githubusercontent.com/TheVelourFog/slush-angular2/master/templates/app/res/angular-shield.png">
	`
})
class DragComponent {}

@Component({
	directives: [ROUTER_DIRECTIVES],
	pipes: [CapitalizePipe],
	selector: '<%= project %>',
	styles: [`
		.dash {
			align-items: center;
			background: #555;
			box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),
              		0 3px 1px -2px rgba(0,0,0,0.20),
              		0 1px 3px 0 rgba(0,0,0,0.12);
			color: #EEE;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			padding: 2%;
			width: 100%;
		}
		.dash__title {
			flex: auto;
			font-weight: normal;
		}
		.dash__nav {
			flex: none;
		}
		.dash__link {
			color: inherit;
			text-decoration: none;
		}
		.dash__link:hover { color: #E1BEE7; }
		.dash__link.router-link-active { color: #BA68C8; }
		.dash__link:not(:first-child):before {
			color: #EEE;
			content: " · "
		}
	`],
	template: `
		<header class="dash">
			<h1 class="dash__title">{{appName | capitalize}}</h1>
			<nav class="dash__nav">
				<a class="dash__link" [router-link]="['/Home']">Home</a>
				<a class="dash__link" [router-link]="['/Example']">Example</a>
			</nav>
		</header>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		path: '/',
		redirectTo: '/home'
	},
	{
		path: '/home',
		as: 'Home',
		component: HomeComponent
	},
	{
		path: '/example',
		as: 'Example',
		component: DragComponent
	}
])
export default class {
	appName: string;
	constructor () {
		this.appName = '<%= project %>';
	}
}