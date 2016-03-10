import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {ShadowDirective} from '../directive/exampleDirective';
import {Resource, ResourceService} from '../shared/exampleService';

@Component({
	selector: 'home-component',
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
}

@Component({
	directives: [ShadowDirective, CORE_DIRECTIVES],
  providers: [ResourceService],
	selector: 'resource-component',
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
        <a class="link" shadow-directive [href]="resource.url">
          <h2>{{resource.name}}</h2>
          <p>{{resource.description}}</p>
        </a>
      </li>
    </ul>
	`
})
export class ResourceComponent implements OnInit {
  resources: Resource[] = [];
  constructor (private _resource: ResourceService) { }
  ngOnInit () {
    this._resource.getRes().subscribe(res => this.resources = res);
  }
}
