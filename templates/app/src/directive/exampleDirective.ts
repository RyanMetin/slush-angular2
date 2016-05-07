import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({ selector: '[bs-directive]' })
export class BoxshadowDirective {
  @HostBinding('style.boxShadow') boxshadow: string = '0 2px 4px 0 rgba(0,0,0,0.3)';
  @HostBinding('style.transition') transition: string = 'box-shadow 200ms ease-in-out';
  @HostListener('mouseenter') onMouseEnter () {
    this.boxshadow = '0 4px 8px 2px rgba(0,0,0,0.4)';
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.boxshadow = '0 2px 4px 0 rgba(0,0,0,0.3)';
  }
}