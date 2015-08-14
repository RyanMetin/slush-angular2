/// <reference path="../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
	selector: '<%= slug %>'
})
@View({
	template: `
		<h1>{{name}}</h1>
	`
})
export default class {
	name: string;
	constructor() {
		this.name = '<%= appName %>';
	}
}