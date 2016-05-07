import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
	styles: [`
    .home {
      display: flex;
      flex-flow: row wrap;
      margin: 2rem auto;
      justify-content: center;
    }
    .home .logo {
      height: auto;
      margin: 1rem;
    }
  `],
	template: `
    <div class="home">
      <img class="logo" [src]="logo.slush">
      <img class="logo" [src]="logo.shield">
    </div>
  `
})
export class HomeComponent {
  logo: Object = {
    shield: 'res/angular2.png', slush: 'res/slush.png'
  };
  constructor (private title: Title) {
    this.title.setTitle('Home');
  }
}

import {BoxshadowDirective} from '../directive/example.directive';
import {Link, LinkService} from '../shared/example.service';

@Component({
	directives: [BoxshadowDirective],
  providers: [LinkService],
	styles: [`
		.links { list-style-type: none; }
    .links .link {
      align-items: center;
			background: grey;
			color: white;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin: 2rem 4rem;
      text-decoration: none;
    }
	`],
	template: `
    <ul class="links">
      <li *ngFor="let link of links">
        <a class="link" bs-directive [href]="link.url">
          <h2>{{link.name}}</h2>
          <p>{{link.description}}</p>
        </a>
      </li>
    </ul>
	`
})
export class LinksComponent implements OnInit {
  links: Link[];
  constructor (private link: LinkService, private title: Title) {
    this.title.setTitle('Links');
  }
  ngOnInit () {
    this.link.getLinks().subscribe(res => this.links = res);
  }
}
