///<reference path="../typings/tsd.d.ts"/>
import {Pipe} from 'angular2/angular2';

@Pipe({name: '<%= slug %>'})
export class <%= camel %> {
	
	transform (val, args?) {
		return val;
	}
	
}