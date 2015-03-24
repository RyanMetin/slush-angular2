import {Component,Template,If} from 'angular2/angular2';
import {StarterService} from 'service/starter/starter';

@Component({
  selector: 'starter',
  componentServices: [StarterService]
})

@Template({
  url: 'app/component/starter/starter.html',
  directives: [If]
})

export class Starter {

  constructor(svc:StarterService) {
    this.title = svc.title;
  }
  
}