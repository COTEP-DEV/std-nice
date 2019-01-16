import Devutils from '../src/devutils.js';

/** @test {basic } */
describe('String tests', () => {
  it('string', () => Devutils.sd('Bonjour'));

  it('empty string', () => Devutils.sd(''));

  it('String(string)', () => Devutils.sd(String('Bonjour')));

  it('Multiple strings', () => Devutils.sd('salut', 'comment ca va?'));
});
