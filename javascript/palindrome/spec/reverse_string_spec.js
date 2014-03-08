var reverseString = require('../lib/reverse_string').reverseString;

describe('reverseString', function() {
  it('is a function', function() {
    expect(typeof reverseString).toBe('function');
  });

  it('should reverse a string', function() {
    expect(reverseString('ello')).toBe('olle');
  });
});