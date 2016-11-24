import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
	transform (value: string): any {
		return value.toLowerCase().replace(/\b\w/g, match => match.toUpperCase());
	}
}
