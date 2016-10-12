import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Link {
  name: string; description: string; url: string;
}
@Injectable()
export class LinkService {
  constructor (private http: Http) {}
  getLinks (): Observable<Link[]> {
    return this.http.get('res/resources.json').map((res: Response) => res.json());
  }
}