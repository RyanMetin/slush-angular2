///<reference path="../typings/tsd.d.ts"/>
import {Pipe} from 'angular2/core';

@Pipe({name: '<%= slug %>'})
export class <%= mod %> {
	
	transform (val, args?) {
		return val;
	}
	
}