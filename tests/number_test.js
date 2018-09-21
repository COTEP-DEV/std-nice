import Devutils from '../src/devutils.js';

/** @test {basic } */
describe('Basic tests', () => {
  it('number 42', () => Devutils.sd(42));

  it('number 0', () => Devutils.sd(0));

  it('Number(42)', () => Devutils.sd(Number(42)));

  it('Number(0)', () => Devutils.sd(Number(0)));

  it('Huge number', () => Devutils.sd(654654648748787878454546564568768));

  it('Float', () => Devutils.sd(0.1));

  it('Huge float', () => Devutils.sd(1258.0000000002515000000000545));
});
