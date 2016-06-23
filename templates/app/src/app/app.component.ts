import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from '../+examples/home';
import {LinksComponent} from '../+examples/links';
import {BoxshadowDirective} from '../shared/directive/example.directive';
import {CapitalizePipe} from '../shared/pipe/example.pipe';

@Component({
	directives: [BoxshadowDirective, ROUTER_DIRECTIVES],
	pipes: [CapitalizePipe],
	selector: 'app',
	styles: [`
		header {
			align-items: center;
			background: grey;
			color: white;
			display: flex;
			justify-content: space-between;
			padding: 0.8rem 1.2rem;
		}
		h1 {
			flex: auto;
      font-size: 1.6rem;
		}
		nav {
			margin-left: auto;
		}
		a {
			color: inherit;
      font-size: 1.4rem;
			text-decoration: none;
		}
		a.router-link-active { color: #E1BEE7; }
		a:hover { color: #BA68C8; }
		a:not(:first-of-type):before {
			color: white;
			content: " · ";
		}
	`],
	template: `
		<header bs-directive>
			<h1>{{appTitle | capitalize}}</h1>
			<nav>
				<a [routerLink]="['/home']">Home</a>
				<a [routerLink]="['/links']">Links</a>
			</nav>
		</header>
    <router-outlet></router-outlet>
	`
})
export default class implements OnInit {
	public appTitle: string = '<%= project %>';
	constructor (private router: Router) { }
	ngOnInit () {
		this.router.navigate(['/home']);
	}
}