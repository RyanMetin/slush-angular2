import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DragDirective} from '../directive/exampleDirective';
import {CapitalizePipe} from '../shared/examplePipe';

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
			background: url("res/shield.png") center/contain no-repeat;
			height: 400px;
			width: 400px;
		}
	`],
	template: `
		<div drag-directive></div>
	`
})
class DragComponent {}

@Component({
	directives: [COMMON_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
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
		.dash__link:not(:first-of-type):before {
			color: #EEE;
			content: " · "
		}
	`],
	template: `
		<header class="dash">
			<h1 class="dash__title">{{appName | capitalize}}</h1>
			<nav class="dash__nav">
				<a class="dash__link" *ngFor="#route of appRoutes" [routerLink]="[route]">{{route}}</a>
			</nav>
		</header>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		path: '/home',
		as: 'Home',
		component: HomeComponent,
    useAsDefault: true
	},
	{
		path: '/example',
		as: 'Example',
		component: DragComponent
	}
])
export default class {
	public appName: string = '<%= project %>';
	public appRoutes: Array<string> = [
		'Home', 'Example'
	];
}