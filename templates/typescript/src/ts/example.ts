/// <reference path="../typings/tsd.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'example'
})
@View({
	template: `
		<h1>{{name}}</h1>
	`
})
export class Example {
	name: string;
	constructor() {
		this.name = '<%= name =>';
	}
}