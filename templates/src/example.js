import {ComponentAnnotation as Component, ViewAnnotation as View, NgIf} from 'angular2/angular2';

@Component({
	selector: 'example'
})
@View({
	template: `<h1 *ng-if="name">{{name}}</h1>`,
	directives: [NgIf]
})
export class Example {
	name: string;
	constructor() {
		this.name = '<%= name %>';
	}
}
