import {describe, expect, inject, it} from '@angular2/core/testing';

import App from './appComponent';

describe('App Component', () => {
  it('should have `appTitle` <%= project %>', inject([App], (i: App) => {
    expect(i.appTitle).toBe('<%= project %>');
  }));
});
