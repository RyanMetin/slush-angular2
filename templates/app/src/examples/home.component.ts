import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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