import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit} from 'angular2/angular2';

@Directive({
	selector: '[drag-directive]'
})
export class DragDirective implements OnInit, OnDestroy {
	drag;
	mouseup: EventEmitter = new EventEmitter();
	mousedown: EventEmitter = new EventEmitter();
	mousemove: EventEmitter = new EventEmitter();
	@HostListener('mouseup', ['$event'])
	onMouseup(event) { this.mouseup.next(event); }
	@HostListener('mousedown', ['$event'])
	onMousedown(event) { this.mousedown.next(event); }
	@HostListener('mousemove', ['$event'])
	onMousemove(event) { this.mousemove.next(event); }
	
	constructor (public element: ElementRef) {
		this.drag = this.mousedown.toRx().map(event => {
			event.preventDefault();
			event.stopPropagation();
			return {
				left: event.clientX - this.element.nativeElement.getBoundingClientRect().left,
				top: event.clientY - this.element.nativeElement.getBoundingClientRect().top
			};
		}).flatMap(diff => this.mousemove.toRx().map(pos => ({
			left: pos.clientX - diff.left,
			top: pos.clientY - diff.top
		})).takeUntil(this.mouseup.toRx()));
	}
	public onInit(): void {
		this.drag.subscribe({
			next: pos => {
				this.element.nativeElement.style.left = pos.left + 'px';
				this.element.nativeElement.style.top = pos.top + 'px';
			}
		});
	}
	public onDestroy(): void {
		this.drag.unsubscribe();
	}
}