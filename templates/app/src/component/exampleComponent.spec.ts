import {describe, expect, inject, it} from 'angular2/testing';

import Example from './exampleComponent';

describe('Example Component', () => {
  it('should have `appTitle` <%= project %>', inject([Example], (ex: Example) => {
    expect(ex.appTitle).toBe('<%= project %>');
  }));
});