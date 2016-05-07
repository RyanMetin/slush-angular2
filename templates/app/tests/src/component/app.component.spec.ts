import {describe, expect, inject, it} from '@angular/core/testing';
import App from '../../../src/component/app.component';

describe('AppComponent', () => {
  it('should have `appTitle` <%= project %>', inject([App], (i: App) => {
    expect(i.appTitle).toBe('<%= project %>');
  }));
});
