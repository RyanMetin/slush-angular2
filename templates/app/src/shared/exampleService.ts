import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Resource {
  name: string; description: string; url: string;
}
@Injectable()
export class ResourceService {
  constructor (private http: Http) {}
  getResource (): Observable<Resource[]> {
    return this.http.get('resources.json').map((res: Response) => res.json());
  }
}