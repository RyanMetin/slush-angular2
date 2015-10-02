/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
	selector: '<%= slug %>'
})
@View({
	templateUrl: 'src/component/example/example.html',
	styleUrls: ['src/component/example/example.css']
})
export default class {
	name: string;
	constructor() {
		this.name = '<%= appName %>';
	}
}