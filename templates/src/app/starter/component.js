import {Component,Template} from 'angular2/angular2';
import {TitleSvc} from 'starter/service';
import {HoverHeader} from 'starter/decorator';

@Component({
	selector: 'starter',
	services: [TitleSvc]
})

@Template({
	url: 'app/starter/template.html',
	directives: [HoverHeader]
})

export class Starter {
	title: string;
	constructor(svc: TitleSvc) {
		this.title = svc.title;
	}
}