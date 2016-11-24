import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Link, LinkService } from '../service/link.service';

@Component({
  providers: [ LinkService ],
	styles: [`
		ul { list-style-type: none; }
    a {
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
    <ul>
      <li *ngFor="let link of links">
        <a shadowdirective [href]="link.url">
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
