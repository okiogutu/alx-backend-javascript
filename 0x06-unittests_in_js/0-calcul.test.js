const mocha = require('mocha');
const calcul = require('./0-calcul');

const assert = require('assert');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calcul(1, 3), 4);
    assert.strictEqual(calcul(-1, -4), -5);
    assert.strictEqual(calcul(-1, 6), 5);
  });

  it('should handle floats & return integers', () => {
    assert.strictEqual(calcul(2.5, 3.2), 6);
    assert.strictEqual(calcul(-5.23, -1.5), -6);
    assert.strictEqual(calcul(8.9, -2.5), 7);
  });

  it('should handle value if one argument is given.', () => {
    assert.strictEqual(calcul(3), 3);
    assert.strictEqual(calcul(8.9), 9);
  });

  it('should convert non-numbers into numbers', () => {
    assert.strictEqual(calcul(true, 2), 3);
    assert.strictEqual(calcul(true, '4.5'), 6);
    assert.strictEqual(calcul('1.5', '3'), 5);
  });

  it('should throw type error if cannot handle non-numbers', () => {
    assert.throws(() => calcul('hello world'), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
    assert.throws(() => calcul('hello world', 55.6), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
  });
});
