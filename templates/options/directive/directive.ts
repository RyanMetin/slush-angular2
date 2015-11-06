///<reference path="../typings/tsd.d.ts"/>
import {Directive<%= ',' + coreImports %>} from 'angular2/angular2';

@Directive({
	events: [],
	inputs: [],
	outputs: [],
	host: [],
	properties: [],
	providers: [],
	queries: [],
	selector: '[<%= slug %>]'
})
export class <%= mod %> {
	
	constructor() {
		
	}
	
}