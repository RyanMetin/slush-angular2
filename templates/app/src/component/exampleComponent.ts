import {Component, Input} from 'angular2/core';
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig, RouteDefinition, ROUTER_DIRECTIVES} from 'angular2/router';

import {DragDirective} from '../directive/exampleDirective';
import {CapitalizePipe} from '../shared/examplePipe';

var APP_ROUTES: RouteDefinition[] = [
	{ path: '/example', name: 'Example', component: ExampleComponent, useAsDefault: true },
	{ path: '/resources', name: 'Resources', component: ResourcesComponent }
];

@Component({
	selector: 'example-component',
	styles: [`
    .example { 
      display: flex;
      flex-direction: column;
      margin: 4rem auto;
    }
    .example__container {
      display: flex;
      flex: 1;
      flex-flow: row nowrap;
    }
    .logo {
      flex: 0 1 auto;
    }
  `],
	template: `
    <div class="example">
      <div class="example__container">
        <img class="logo" [src]="logo.slush">
        <img class="logo" [src]="logo.shield">
      </div>
    </div>
  `
})
class ExampleComponent {
  public logo: Object = {
    slush: 'res/slush.png', shield: 'res/shield.png'
  };
}

@Component({
	directives: [],
	selector: 'resources-component',
	styles: [`
    
	`],
	template: `
		<div></div>
	`
})
class ResourcesComponent {}

@Component({
	directives: [COMMON_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	pipes: [CapitalizePipe],
	selector: 'slushy',
	styles: [`
		.dash {
			align-items: center;
			background: grey;
			box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),
              		0 3px 1px -2px rgba(0,0,0,0.20),
              		0 1px 3px 0 rgba(0,0,0,0.12);
			color: white;
			display: flex;
			justify-content: space-between;
			padding: 0.8rem 1.2rem;
			width: 100%;
		}
		.dash__title {
			flex: auto;
      font-size: 1.6rem;
		}
		.dash__nav {
			margin-left: auto;
		}
		.dash__link {
			color: inherit;
      font-size: 1.4rem;
			text-decoration: none;
		}
		.dash__link.router-link-active { color: #E1BEE7; }
		.dash__link:hover { color: #BA68C8; }
		.dash__link:not(:first-of-type):before {
			color: white;
			content: " · ";
		}
	`],
	template: `
		<header class="dash">
			<h1 class="dash__title">{{appTitle | capitalize}}</h1>
			<nav class="dash__nav">
				<a class="dash__link" *ngFor="#route of appRoutes" [routerLink]="[route]">{{route}}</a>
			</nav>
		</header>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{ path: '/example', name: 'Example', component: ExampleComponent, useAsDefault: true },
	{ path: '/resources', name: 'Resources', component: ResourcesComponent }
])
export default class {
	public appTitle: string = '<%= project %>';
	public appRoutes: Array<string> = [
		'Example', 'Resources'
	];
}