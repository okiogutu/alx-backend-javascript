const mocha = require('mocha');
const calcul = require('./1-calcul');

const assert = require('assert');

describe('calculateNumber', () => {
  it('should handle floats return sum of integers', () => {
    assert.equal(calcul('SUM', 1, 3), 4);
    assert.equal(calcul('SUM', -1, -4), -5);
    assert.equal(calcul('SUM', -1, 6), 5);
    // Handle Floats
    assert.equal(calcul('SUM', 2.5, 3.2), 6);
    assert.equal(calcul('SUM', -5.23, -1.5), -6);
    assert.equal(calcul('SUM', 8.9, -2.5), 7);
  });

  it('should handle floats & return integers for subtract', () => {
    assert.equal(calcul('SUBTRACT', 1, 3), -2);
    assert.equal(calcul('SUBTRACT', -1, -4), 3);
    assert.equal(calcul('SUBTRACT', -1, 6), -7);
    // Handle Floats
    assert.equal(calcul('SUBTRACT', 2.5, 3.2), 0);
    assert.equal(calcul('SUBTRACT', -5.23, -1.5), -4);
    assert.equal(calcul('SUBTRACT', 8.9, -2.5), 11);
  });

  it('should handle sum & subtract value if one argument is given.', () => {
    assert.equal(calcul('SUM', 3), 3);
    assert.equal(calcul('SUM', 8.9), 9);
    // Handle Subtract
    assert.equal(calcul('SUBTRACT', 3), 3);
    assert.equal(calcul('SUBTRACT', 8.9), 9);
  });

  it('should handle division', () => {
    assert.equal(calcul('DIVIDE', 4, 5), 0.8);
    assert.equal(calcul('DIVIDE', -2, -5), 0.4);
    assert.equal(calcul('DIVIDE', 5, -2), -2.5);
  });

  it('should throw type error if cannot handle non-numbers', () => {
    assert.throws(() => calcul('SUM', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calcul('DIVIDE', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calcul('SUBTRACT', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calcul('blinky!', NaN, 5), '[Function: TypeError]');
  });
});
