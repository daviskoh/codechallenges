var palindrome = require('../lib/palindrome').palindrome;

describe('palindrome', function() {
  it('is a function', function() {
    expect(typeof palindrome).toBe('function');
  });

  it('handles a simple 1 letter case', function() {
    expect(palindrome('e')).toBe(true);
  });
});