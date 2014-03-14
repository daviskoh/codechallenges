var lengthOfStrings = require('../lib/length_of_strings');

describe('lengthOfStrings', function() {
  it('is a function', function() {
    expect(typeof lengthOfStrings).toBe('function');
  });

  it('handles simple case', function() {
    expect(lengthOfStrings(['array'])).toBe([1]);
  });
});