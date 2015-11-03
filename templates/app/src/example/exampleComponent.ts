///<reference path="../typings/tsd.d.ts"/>
import {Component} from 'angular2/angular2';

import ExampleDirective from 'exampleDirective';

@Component({
	selector: 'home-component',
	styles: [`.home { padding: 4% 8%; }`],
	template: `<h1 class="home">Welcome to Angular2</h1>`
})
export class HomeComponent {}

@Component({
	directives: [ExampleDirective],
	selector: 'drag-component',
	styles: [`
		[drag-directive] {
			position: relative;
			left: 24px;
			top: 24px;
		}
	`],
	template: `
		<img drag-directive src="../../res/angular-shield.png">
	`
})
export class DragComponent {}