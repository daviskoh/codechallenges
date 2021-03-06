var isPrime = require('../lib/is_prime').isPrime;

describe('isPrime', function() {
  it('is a function', function() {
    expect(typeof isPrime === 'function').toBe(true);
  });

  it('returns false for 0', function() {
    expect(isPrime(0)).toBe('false');
  });

  it('returns false for 1', function() {
    expect(isPrime(1)).toBe('false');
  });

  it('handles a single digit prime number', function() {
    expect(isPrime(5)).toBe('true');
  });

  it('handles a multiple digit prime number', function() {
    expect(isPrime(19)).toBe('true');
  });

  it('handles a single digit non-prime number', function() {
    expect(isPrime(6)).toBe('false');
  });

  it('handles a multiple digit non-prime number', function() {
    expect(isPrime(110)).toBe('false');
  });

  it('returns false for numbers less than 3', function() {
    expect(isPrime(-6)).toBe('false');
  });

  it('returns true for 3', function() {
    expect(isPrime(3)).toBe('true');
  });
});