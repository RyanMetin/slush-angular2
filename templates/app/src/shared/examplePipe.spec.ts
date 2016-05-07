import {CapitalizePipe} from './examplePipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;
  beforeEach(() => {
    pipe = new CapitalizePipe();
  });
  it('transforms "slushy" to "Slushy"', () => {
    expect(pipe.transform('slushy')).toEqual('Slushy');
  });
});