import {Component, Template} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Router} from '../../../node_modules/angular-new-router/dist/router';
import {StarterSvc} from '../../service/starter/starter-svc';

@Component({
  selector: 'starter-app',
  componentServices: [ StarterSvc ]
})

@Template({
  url: 'starter.html',
  directives: [  ]
})

export class Starter {

  constructor(svc:StarterSvc, $router:Router) {
  	this.title = svc.title;
  }

}