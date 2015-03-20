import {Component, Template} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {StarterSvc} from 'service/starter/starter-svc';

@Component({
  selector: 'starter-component',
  componentServices: [ StarterSvc ]
})

@Template({
  url: 'starter.html'
})

export class Starter {

  constructor(svc:StarterSvc) {
  	this.title = svc.title;
  }

}