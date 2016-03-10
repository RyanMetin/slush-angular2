import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export interface Resource {
  name: string; description: string; url: string;
}
@Injectable()
export class ResourceService {
  constructor (private _http: Http) {}
  getRes () {
    return this._http.get('resources.json').map(res => res.json());
  }
}