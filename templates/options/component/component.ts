import {Component<%= (core.length > 0) ? ',' + core : '' %>} from '@angular/core';<% if(common.length > 0) { %>
import {<%= common %>} from '@angular/common';<% } %><% if(http.length > 0) { %>
import {<%= http %>} from '@angular/http';<% } %><% if(router.length > 0) { %>
import {<%= router %>} from '@angular/router';<% } %>

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
	styles: [``],<% } else { %>
	styleUrls: ['src/component/<%= slug %>.css'],<% } %><% if(template == 'inline') { %>
	template: ``<% } else { %>
	templateUrl: 'src/component/<%= slug %>.html'<% } %>
})
export class <%= mod %> {
	
	constructor() {
		
	}
	
}