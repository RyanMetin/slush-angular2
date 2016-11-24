import { Component } from '@angular/core';

@Component({
	selector: '<%= camel %>-root',
	template: `
		<nav-component></nav-component>
    <router-outlet></router-outlet>
	`
})
export class AppComponent { }
