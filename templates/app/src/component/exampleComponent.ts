import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {BoxshadowDirective} from '../directive/exampleDirective';
import {Resource, ResourceService} from '../shared/exampleService';

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
  public logo: Object = {
    shield: 'res/angular2.png', slush: 'res/slush.png'
  };
  constructor (private title: Title) {
    this.title.setTitle('Home');
  }
}

@Component({
	directives: [BoxshadowDirective],
  providers: [ResourceService],
	styles: [`
		.resources { list-style-type: none; }
    .resources .link {
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
    <ul class="resources">
      <li class="resource" *ngFor="#resource of resources">
        <a class="link" bs-directive [href]="resource.url">
          <h2>{{resource.name}}</h2>
          <p>{{resource.description}}</p>
        </a>
      </li>
    </ul>
	`
})
export class ResourceComponent implements OnInit {
  resources: Resource[];
  constructor (private resource: ResourceService, private title: Title) {
    this.title.setTitle('Resources');
  }
  ngOnInit () {
    this.resource.getResource().subscribe(res => this.resources = res);
  }
}
