var factorial = require('../lib/factorial');

describe('factorial', function() {
  it('is a function', function() {
    expect(typeof factorial).toBe('function');
  });
});