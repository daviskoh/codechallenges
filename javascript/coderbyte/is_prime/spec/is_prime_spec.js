var isPrime = require('../lib/is_prime').isPrime;

describe('isPrime', function() {
  it('is a function', function() {
    expect(typeof isPrime === 'function').toBe(true);
  });
});