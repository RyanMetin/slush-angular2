import {Pipe} from 'angular2/angular2';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe {
	transform (value: string): any {
		return value.toLowerCase().replace(/\b\w/g, match => match.toUpperCase());
	}
}