var removeWhitespace = require('../lib/remove_whitespace').removeWhitespace;

describe('removeWhitespace', function() {
  it('is a function', function() {
    expect(typeof removeWhitespace).toBe('function');
  });
});