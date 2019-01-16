import Devutils from '../src/devutils.js';

/** @test {mixup } */
describe('Mixup tests', () => {
  it('Multiple stuff 1', () => Devutils.sd('salut', 'comment ca va?'));

  it('Multiple stuff 2', () => Devutils.sd('salut', {
    key1: 'value1',
    key2: new Error('err'),
  }, 'comment ca va?'));
});
