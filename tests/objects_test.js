import Devutils from '../src/devutils.js';

/** @test {basic } */
describe('Basic tests', () => {
  it('Empty object', () => Devutils.sd({}));

  it('Object string', () => Devutils.sd({
    message: 'Bonjour',
  }));

  it('Object huge string', () => {
    let str = '';

    for (let i = 0; i < 500; i += 1) {
      str = `${str}p`;
    }

    return Devutils.sd({
      message: str,
    });
  });

  it('Object many strings', () => Devutils.sd({
    1: 'Bonjour',
    2: 'Comment',
    3: 'Allez vous',
    4: 'Madame',
  }));

  it('Object void (0) value', () => Devutils.sd({
    message: void(0),
  }));

  it('Object 2 levels', () => Devutils.sd({
    1: {
      2: 'Deuxieme etage',
    },
  }));

  it('Object 3 levels', () => Devutils.sd({
    1: {
      2: {
        3: 'Troisieme etage',
      },
    },
  }));

  it('Object many levels', () => {
    const obj = {};
    let ptr = obj;

    for (let i = 0; i < 500; i += 1) {
      ptr[i] = {};
      ptr = ptr[i];
    }

    return Devutils.sd(ptr);
  });

  it('Object undefined key', () => Devutils.sd({
    message: 'Bonjour',
    undefined: 'lalalala',
  }));

  it('Object circular', () => {
    const obj = {
      a: {},
    };

    const c = obj;

    obj.a.b1 = obj.a;
    obj.a.b2 = c;

    return Devutils.sd(obj);
  });
});
