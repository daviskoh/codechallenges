var palindrome = require('../lib/palindrome').palindrome;

describe('palindrome', function() {
  it('is a function', function() {
    expect(typeof palindrome).toBe('function');
  });
});