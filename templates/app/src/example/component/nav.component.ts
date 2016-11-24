import { Component } from '@angular/core';

@Component({
  selector: 'nav-component',
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
    <header bsDirective>
			<h1>{{appTitle | capitalize}}</h1>
			<nav>
				<a [routerLink]="['/']">Home</a>
				<a [routerLink]="['/links']">Links</a>
			</nav>
		</header>
  `
})
export class NavComponent {
	appTitle: string = '<%= project %>';
}
