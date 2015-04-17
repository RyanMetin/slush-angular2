import {Decorator,NgElement} from 'angular2/angular2';

@Decorator({
	selector: '[decor]',
	hostListeners: {
        mouseenter: 'bigHead()',
        mouseleave: 'regHead()'
	}
})

export class HoverHeader {
    el: NgElement;
    constructor(el: NgElement) {
        this.el = el;
	}
	bigHead() {
        this.el.domElement.style.fontSize = '3em';
        this.el.domElement.style.height = '128px';
        this.el.domElement.style.minHeight = '128px';
    }
    regHead() {
        this.el.domElement.style.fontSize = '1.5em';
        this.el.domElement.style.height = '64px';
        this.el.domElement.style.minHeight = '64px';
    }
}