import {provide} from '@angular/core';
import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';
import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {LinkService} from '../../../../src/shared/service/example.service';

class MockLinkService {
  links: Array<Object> = [{ 
    "name": "angular.io",
    "description": "Website for Angular 2",
    "url": "https://angular.io/"
  }, { 
    "name": "Awesome Angular 2", 
    "description": "Awesome list of Angular 2 resources", 
    "url": "https://github.com/AngularClass/awesome-angular2" 
  }];
}

describe('LinkService', () => {
  beforeEachProviders(() => [
    provide(Http, { useClass: MockBackend }),
    provide(LinkService, { useClass: MockLinkService })
  ]);
  it('returns an object with link names and urls', inject([Http, LinkService], (mockBackend, linkService) => {
    let responses = linkService.getLinks();
    expect(responses).toEqual();
  }));
});