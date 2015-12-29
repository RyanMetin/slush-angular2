import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit} from 'angular2/core';

@Directive({
	selector: '[drag-directive]'
})
export class DragDirective implements OnInit, OnDestroy {
	
	constructor (public element: ElementRef) {
	}
	
	ngOnInit(): void {
	}
	
	ngOnDestroy(): void {
	}
}