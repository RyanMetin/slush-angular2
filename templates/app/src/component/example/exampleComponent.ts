///<reference path="../../../typings/tsd.d.ts"/>
import {Component} from 'angular2/angular2';

import ExampleDirective from '../../directive/example/exampleDirective';

@Component({
	directives: [ExampleDirective],
	selector: 'example-component',
	styles: [`
		[drag-this] {
			background: #5E35B1;
			color: #EEE;
			padding: 2%;
			width: 100%;
		}
	`],
	template: `
		<img drag-this class="" src="" height="" width="">
	`
})
export default class {
	constructor() {}
}