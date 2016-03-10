import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  },
	selector: '[shadow-directive]'
})
export class ShadowDirective {
	constructor (private element: ElementRef) {
    this.element.nativeElement.style.transition = 'box-shadow 200ms ease-in-out';
    this.shadow('0 2px 4px 0 rgba(0,0,0,0.3)');
  }
  onMouseEnter () {
    this.shadow('0 4px 8px 2px rgba(0,0,0,0.4)');
  }
  onMouseLeave () {
    this.shadow('0 2px 4px 0 rgba(0,0,0,0.3)');
  }
  private shadow (boxshadow: string) {
    this.element.nativeElement.style.boxShadow = boxshadow;
  }
}