///<reference path="../typings/tsd.d.ts"/>
import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit} from 'angular2/angular2';

@Directive({
	selector: '[drag-directive]'
})
export class DragDirective implements OnInit, OnDestroy {
	drag;
	drop: EventEmitter = new EventEmitter();
	grab: EventEmitter = new EventEmitter();
	move: EventEmitter = new EventEmitter();
	@HostListener('mouseup', ['$event'])
	onDrop(event) { this.drop.next(event); }
	@HostListener('mousedown', ['$event'])
	onGrab(event) { this.grab.next(event); }
	@HostListener('mousemove', ['$event'])
	onMove(event) { this.move.next(event); }
	
	constructor (public element: ElementRef) {
		this.drag = this.grab.toRx().map(event => ({
			left: event.clientX - this.element.nativeElement.getBoundingClientRect().left,
			top: event.clientY - this.element.nativeElement.getBoundingClientRect().top
		})).flatMap(diff => this.move.toRx().map(event => ({
			left: event.clientX - diff.left,
			top: event.clientY - diff.top
		})).takeUntil(this.drop.toRx()));
	}
	public onInit(): void {
		this.drag.subscribe({
			next: event => {
				this.element.nativeElement.style.left = event.left + 'px';
				this.element.nativeElement.style.top = event.top + 'px';
			}
		});
	}
	public onDestroy(): void {
		this.drag.unsubscribe();
	}
}