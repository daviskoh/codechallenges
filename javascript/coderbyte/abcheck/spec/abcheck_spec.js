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

  it("handles a simple case 'true' where b occurs ahead of a", function() {
    expect(abCheck('ffboooa')).toBe('true');
  });

  it("handles a simple 'false' case where b occurs ahead of a", function() {
    expect(abCheck('ffboooooooa')).toBe('false');
  });

  it("returns false when a occurs 2 steps ahead of b", function() {
    expect(abCheck('ooaoob')).toBe('false');
  });

  it("returns false when b occurs 2 steps ahead of a", function() {
    expect(abCheck('oobooa')).toBe('false');
  });

  it("handles a case with multiple a's", function() {
    expect(abCheck('aooaooob')).toBe('true');
  });
})