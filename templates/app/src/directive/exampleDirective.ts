import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  host: [
    
  ],
	selector: '[drag-directive]'
})
export class DragDirective {
	constructor (private element: ElementRef) {
    
	}
  onMouseEnter () {
    
  }
  onMouseLeave () {
    
  }
}