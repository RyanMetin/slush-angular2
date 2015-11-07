///<reference path="../typings/tsd.d.ts"/>
import {Component<%= (core.length > 0) ? ',' + core : '' %>} from 'angular2/angular2';<% if(form.length > 0) { %>
import {<%= form %>} from 'angular2/angular2';<% } %><% if(http.length > 0) { %>
import {<%= http %>} from 'angular2/http';<% } %><% if(router.length > 0) { %>
import {<%= router %>} from 'angular2/router';<% } %>

@Component({
	directives: [],
	events: [],
	host: [],
	inputs: [],
	outputs: [],
	pipes: [],
	properties: [],
	providers: [],
	selector: '<%= select %>',<% if(styles == 'inline') { %>
	styles: [``],<% } else if(styles == 'external') { %>
	styleUrls: [''],<% } %><% if(template == 'inline') { %>
	template: ``,<% } else if(template == 'external') { %>
	templateUrl: '',<% } %>
})
export class <%= mod %> {
	
	constructor() {
		
	}
	
}