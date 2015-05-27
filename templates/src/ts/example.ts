/// <reference path="typings/tsd.d.ts" />
import {Component, View, NgIf} from 'angular2/angular2';
import {NgIf} from 'angular2/directives';

@Component({
	selector: 'example'
})
@View({
	template: '<h1 *ng-if="name">This {{name}}</h1>',
	directives: [NgIf]
})
export class Example {
	name: string;
	constructor() {
		this.name = 'Example Component';
	}
}