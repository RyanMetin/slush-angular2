import {beforeEach, describe, expect, it} from '@angular/core/testing';
import {CapitalizePipe} from '../../../src/shared/example.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;
  beforeEach(() => {
    pipe = new CapitalizePipe();
  });
  it('transforms "slushy" to "Slushy"', () => {
    expect(pipe.transform('slushy')).toEqual('Slushy');
  });
});