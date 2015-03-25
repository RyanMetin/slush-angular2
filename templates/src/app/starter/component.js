import {Component,Template,If} from 'angular2/angular2';
import {StarterSvc} from 'starter/service';

@Component({
  selector: 'starter',
  componentServices: [StarterSvc]
})

@Template({
  url: 'app/starter/template.html',
  directives: [If]
})

export class Starter {

  constructor() {
  	this.title = 'Angular 2 Starter';
  }
  
}