var count7 = require('../lib/count7');

describe('count7', function() {
  it('is a function', function() {
    expect(typeof count7).toBe('function');
  });

  it('recognizes at least a single 7', function() {
    expect(count7(7)).toBe(1);
  });
});