import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig, RouteDefinition, ROUTER_DIRECTIVES} from 'angular2/router';

import {ShadowDirective} from '../directive/exampleDirective';
import {HomeComponent, ResourceComponent} from './exampleComponent';
import {CapitalizePipe} from '../shared/examplePipe';

const APP_ROUTES: RouteDefinition[] = [
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/resource', name: 'Resource', component: ResourceComponent }
];

@Component({
	directives: [ShadowDirective, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	pipes: [CapitalizePipe],
	selector: '<%= slug %>',
	styles: [`
		.app {
			align-items: center;
			background: grey;
			color: white;
			display: flex;
			justify-content: space-between;
			padding: 0.8rem 1.2rem;
			width: 100%;
		}
		.app_title {
			flex: auto;
      font-size: 1.6rem;
		}
		.app_nav {
			margin-left: auto;
		}
		.app_link {
			color: inherit;
      font-size: 1.4rem;
			text-decoration: none;
		}
		.app_link.router-link-active { color: #E1BEE7; }
		.app_link:hover { color: #BA68C8; }
		.app_link:not(:first-of-type):before {
			color: white;
			content: " · ";
		}
	`],
	template: `
		<header class="app" shadow-directive>
			<h1 class="app_title">{{appTitle | capitalize}}</h1>
			<nav class="app_nav">
				<a class="app_link" *ngFor="#route of appRoutes" [routerLink]="[route.name]">{{route.name}}</a>
			</nav>
		</header>
    <router-outlet></router-outlet>
	`
})
@RouteConfig(APP_ROUTES)
export default class {
	public appTitle: string = '<%= project %>';
	public appRoutes: RouteDefinition[] = APP_ROUTES;
}