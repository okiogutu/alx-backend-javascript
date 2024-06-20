const chai = require('chai');
const calcul = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  it('should handle floats return sum of integers', () => {
    expect(calcul('SUM', 1, 3)).to.equal(4);
    expect(calcul('SUM', -1, -4)).to.equal(-5);
    expect(calcul('SUM', -1, 6)).to.equal(5);
    // Handle Floats
    expect(calcul('SUM', 2.5, 3.2)).to.equal(6);
    expect(calcul('SUM', -5.23, -1.5)).to.equal(-6);
    expect(calcul('SUM', 8.9, -2.5)).to.equal(7);
  });

  it('should handle floats & return integers for subtract', () => {
    expect(calcul('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calcul('SUBTRACT', -1, -4)).to.equal(3);
    expect(calcul('SUBTRACT', -1, 6)).to.equal(-7);
    // Handle Floats
    expect(calcul('SUBTRACT', 2.5, 3.2)).to.equal(0);
    expect(calcul('SUBTRACT', -5.23, -1.5)).to.equal(-4);
    expect(calcul('SUBTRACT', 8.9, -2.5)).to.equal(11);
  });

  it('should handle sum & subtract value if one argument is given.', () => {
    expect(calcul('SUM', 3)).to.equal(3);
    expect(calcul('SUM', 8.9)).to.equal(9);
    // Handle Subtract
    expect(calcul('SUBTRACT', 3)).to.equal(3);
    expect(calcul('SUBTRACT', 8.9)).to.equal(9);
  });

  it('should handle division', () => {
    expect(calcul('DIVIDE', 4, 5)).to.equal(0.8);
    expect(calcul('DIVIDE', -2, -5)).to.equal(0.4);
    expect(calcul('DIVIDE', 5, -2)).to.equal(-2.5);
  });

  it('should throw type error if cannot handle non-numbers', () => {
    expect(() => calcul('SUM', NaN, 5)).to.throw();
    expect(() => calcul('DIVIDE', NaN, 5)).to.throw();
    expect(() => calcul('SUBTRACT', NaN, 5)).to.throw();
    expect(() => calcul('blinky!', NaN, 5)).to.throw();
  });
});

