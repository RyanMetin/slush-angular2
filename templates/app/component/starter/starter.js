import {Component, Template} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {StarterSvc} from '../../service/starter/start-svc';

@Component({
  selector: 'starter-app',
  componentServices: [ StarterSvc ]
})

@Template({
  url: 'starter.html',
  directives: [  ]
})

export class Starter {

  constructor() {
  	
  }

}