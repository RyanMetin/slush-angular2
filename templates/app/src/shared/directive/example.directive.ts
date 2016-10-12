import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[bs-directive]' })
export class BoxShadowDirective {
  private biggie: string = '0 4px 8px 2px #707070';
  private smalls: string = '0 2px 4px 1px #808080';
  private tranny: string = 'box-shadow 200ms ease-in-out';
  @HostBinding('style.transition') transition = this.tranny;
  @HostBinding('style.boxShadow') boxShadow = this.smalls;
  @HostListener('mouseover') onMouseOver () {
    this.boxShadow = this.biggie;
  }
  @HostListener('mouseout') onMouseOut () {
    this.boxShadow = this.smalls;
  }
}