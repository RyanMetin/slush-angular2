import {Component,View} from 'angular2/angular2';
import {TitleSvc} from 'starter/service';
import {HoverHeader} from 'starter/decorator';

@Component({
	selector: 'starter',
	injectables: [TitleSvc]
})

@View({
	templateUrl: 'app/starter/template.html',
	directives: [HoverHeader]
})

export class Starter {
	title: string;
	constructor(svc: TitleSvc) {
		this.title = svc.title;
	}
}