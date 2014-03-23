var array11 = require('../lib/array11');

describe('array11', function() {
  it('is a function', function() {
    expect(typeof array11).toBe('function');
  });

  it('handles a base case', function() {
    expect(array11([], 0)).toBe(0);
  });
});