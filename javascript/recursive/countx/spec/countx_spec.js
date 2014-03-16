var countx = require('../lib/countx');

describe('countx', function() {
  it('is a function', function() {
    expect(typeof countx).toBe('function');
  });

  it('recognizes x', function() {
    expect(countx('x')).toBe(1);
  });

  it('handles an empty string', function() {
    expect(countx('')).toBe(0);
  });
});