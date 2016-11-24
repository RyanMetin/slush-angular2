import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	styles: [`
    div {
      display: flex;
      flex-flow: row wrap;
      margin: 2rem auto;
      justify-content: center;
    }
    img {
      height: auto;
      margin: 1rem;
    }
  `],
	template: `
    <div>
      <img [src]="logo.slush">
      <img [src]="logo.shield">
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
