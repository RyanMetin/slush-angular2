///<reference path="../typings/tsd.d.ts"/>
import {Component<%= ',' + coreImports %>} from 'angular2/angular2';<% if(formImports.length > 0) {%>
import {<%= formImports %>} from 'angular2/angular2';<%} %><% if(httpImports.length > 0) {%>
import {<%= httpImports %>} from 'angular2/http';<%} %><% if(routerImports.length > 0) {%>
import {<%= routerImports %>} from 'angular2/router';<%} %>

@Component({
	directives: [],
	events: [],
	host: [],
	inputs: [],
	outputs: [],
	pipes: [],
	properties: [],
	providers: [],
	selector: '<%= slug %>',
	styles: [],
	template: ``
})
export class <%= mod %> {
	
	constructor() {
		
	}
	
}