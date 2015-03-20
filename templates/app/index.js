import {bootstrap, Component, Template} from 'angular2/angular2';
import {bind} from 'angular2/di';
//import {Router} from 'router/dist/router';
import {Starter} from 'component/starter';

@Component({
  selector: <%= slug %>,
  componentServices: [ /*Router*/ ]
})

@Template({
  inline: '<starter-component></starter-component>',
  directives: [ /*router-view-port,*/ starter-component ]
})

class index {

	constructor(/*$router: Router*/) {
		/*$router.config({ path: '/', component: { main: 'starter' }});*/
	}

}

export function main() {
  bootstrap(index);
}