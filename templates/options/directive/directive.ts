import {Directive<%= (core.length > 0) ? ',' + core : '' %>} from '@angular/core';

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