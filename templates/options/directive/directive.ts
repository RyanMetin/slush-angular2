///<reference path="../typings/tsd.d.ts"/>
import {Directive<%= (core.length > 0) ? ',' + core : '' %>} from 'angular2/angular2';

@Directive({
	events: [],
	inputs: [],
	outputs: [],
	host: [],
	properties: [],
	providers: [],
	queries: [],
	selector: '<%= select %>'
})
export class <%= mod %> {
	
	constructor() {
		
	}
	
}