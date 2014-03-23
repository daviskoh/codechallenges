var array11 = require('../lib/array11');

describe('array11', function() {
  it('is a function', function() {
    expect(typeof array11).toBe('function');
  });

  it('handles a base case', function() {
    expect(array11([], 0)).toBe(0);
  });

  it('recognizes the number 11', function() {
    expect(array11([11], 0)).toBe(1);
  });

  it('counts up all 11', function() {
    expect(array11([11, 11], 0)).toBe(2);
  });

  it('distinguishes between 11 and other numbers', function() {
    expect(array11([11, 3, 11, 55, 11], 0)).toBe(3);
  });
});