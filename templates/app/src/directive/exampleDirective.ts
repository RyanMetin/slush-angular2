import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit} from 'angular2/angular2';

@Directive({
	selector: '[drag-directive]'
})
export class DragDirective implements OnInit, OnDestroy {
	
	constructor (public element: ElementRef) {
	}
	
	onInit(): void {
	}
	
	onDestroy(): void {
	}
}