var abCheck = require('../lib/abcheck').abCheck;

describe('ABCheck', function() {
  it('returns false if a is missing', function() {
    expect(abCheck('boo')).toBe('false');
  });

  it('returns false if b is missing', function() {
    expect(abCheck('attitude')).toBe('false');
  });

  it("handles a simple 'true' case with 1 a and 1 b", function() {
    expect(abCheck('ffaeeeb')).toBe('true');
  });

  it("handles a simple 'false' case with 1 a and 1 b", function() {
    expect(abCheck('dddannnnnb')).toBe('false');
  });
})