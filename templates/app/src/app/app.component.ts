import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from '../+example/home';
import {LinksComponent} from '../+example/links';
import {BoxshadowDirective} from '../shared/directive/example.directive';
import {CapitalizePipe} from '../shared/pipe/example.pipe';

@Component({
	directives: [BoxshadowDirective, ROUTER_DIRECTIVES],
	pipes: [CapitalizePipe],
	selector: 'app',
	styles: [`
		.app {
			align-items: center;
			background: grey;
			color: white;
			display: flex;
			justify-content: space-between;
			padding: 0.8rem 1.2rem;
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
		<header class="app" bs-directive>
			<h1 class="app_title">{{appTitle | capitalize}}</h1>
			<nav class="app_nav">
				<a class="app_link" [routerLink]="['/home']">Home</a>
				<a class="app_link" [routerLink]="['/links']">Links</a>
			</nav>
		</header>
    <router-outlet></router-outlet>
	`
})
@Routes([
	{ path: '/home', component: HomeComponent },
	{ path: '/links', component: LinksComponent }
])
export default class implements OnInit {
	public appTitle: string = '<%= project %>';
	constructor (private router: Router) { }
	ngOnInit () {
		this.router.navigate(['/home']);
	}
}