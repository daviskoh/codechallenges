var factorial = require('../lib/factorial');

describe('factorial', function() {
  it('is a function', function() {
    expect(typeof factorial).toBe('function');
  });

  it('handles 1', function() {
    expect(factorial(1)).toBe(1);
  });

  it('handles 2', function() {
    expect(factorial(2)).toBe(2);
  });
});