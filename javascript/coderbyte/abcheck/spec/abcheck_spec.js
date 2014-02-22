var abCheck = require('../lib/abcheck').abCheck;

describe('ABCheck', function() {
  it('returns false if a is missing', function() {
    expect(abCheck('boo')).toBe('false');
  });

  it('returns false if b is missing', function() {
    expect(abCheck('attitude')).toBe('false');
  });
})