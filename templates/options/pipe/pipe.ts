import {Pipe} from '@angular/core';

@Pipe({name: '<%= slug %>'})
export class <%= mod %> {
	
	transform (val, args?) {
		return val;
	}
	
}