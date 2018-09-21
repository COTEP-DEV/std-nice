import Devutils from '../src/devutils.js';

/** @test {basic } */
describe('Basic tests', () => {
  it('string', () => Devutils.sd('Bonjour'));

  it('empty string', () => Devutils.sd(''));

  it('void (0)', () => Devutils.sd(void(0)));

  it('number', () => Devutils.sd(42));

  it('Simple object', () => Devutils.sd({
    type: 1,
  }));
});
