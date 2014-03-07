var equalAmount = require('../lib/equal_amount').equalAmount;

describe('equalAmount', function() {
  it('is a function', function() {
    expect(typeof equalAmount).toBe('function');
  });

  it('should handle a simple true case', function() {
    expect(equalAmount('xo')).toBe('true');
  });

  it('should handle a simple false case', function() {
    expect(equalAmount('x')).toBe('false');
  });

  it('should handle a complex true case', function() {
    expect(equalAmount('xoxoxo')).toBe('true');
  });

  it('should handle a complex false case', function() {
    expect(equalAmount('xoooox')).toBe('false');
  });
});