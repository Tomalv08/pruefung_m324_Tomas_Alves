import { calculate } from '../index.js';
import { expect } from 'chai';

describe('calculate', () => {
  it('should add two numbers', () => {
    const result = calculate(3, 2, 'add');
    expect(result).to.equal(5);
  });

  it('should subtract two numbers', () => {
    const result = calculate(3, 2, 'subtract');
    expect(result).to.equal(1);
  });

  it('should throw error for invalid operation', () => {
    expect(() => calculate(3, 2, 'multiply')).to.throw('Invalid operation');
  });
});
