import {Directive, HostBinding, HostListener} from 'angular2/core';

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

// @Directive({ selector: '[copy-directive]' })
// export class CopyDirective {
//   selection: Selection = window.getSelection();
//   @Input('copy-directive') target: string;
//   @HostListener('click') onClick (): void {
//     let range = document.createRange();
//     range.selectNodeContents(document.querySelector(this.target));
//     this.selection.removeAllRanges();
//     this.selection.addRange(range);
//     try {
//       document.execCommand('copy');
//       console.log('Copied to clipboard.');
//     } catch (error) {
//       console.log('Copy failed.');
//     }
//     this.selection.removeRange(range);
//   }
// }