///<reference path="../../typings/tsd.d.ts"/>
import {Directive, HostListener} from 'angular2/angular2';

@Directive({
	selector: '[drag-this]'
})
export default class {
	@HostListener('mousedown', ['$event.target'])
	onGrab(el) {
		
	}
}