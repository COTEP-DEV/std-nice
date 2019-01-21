import Devutils from '../src/devutils.js';

/** @test {basic } */
describe('String tests', () => {
  it('string', () => Devutils.sd('Bonjour'));

  it('empty string', () => Devutils.sd(''));

  it('String(string)', () => Devutils.sd(String('Bonjour')));

  it('JSON.stringigy(obj)', () => Devutils.sd(JSON.stringify({
		babel: {
			options: {
				sourceMap: true,
			},
			files: {
				expand: true,
				src: ['src/**/*.js', 'tests/**/*.js'],
				ext: '.js',
				dest: './build/',
			},
		},
	})));
});
