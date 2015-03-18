import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: '<%= name %>'
})

@Template({
  url: '<%= name %>.html'
})

class <%= name %> {

  constructor() {
    console.log('App ready.');
  }

}

export function main() {
  bootstrap(<%= name %>);
}