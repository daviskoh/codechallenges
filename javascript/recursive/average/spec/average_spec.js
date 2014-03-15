var average = require('../lib/average');

describe('average', function() {
  it('is a function', function() {
    expect(typeof average).toBe('function');
  });

  it('handles simple case', function() {
    expect(average([1,2,3])).toBe(2);
  });
});