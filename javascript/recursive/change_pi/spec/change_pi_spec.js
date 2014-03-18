var changePi = require('../lib/change_pi');

describe('changePi', function() {
  it('is a function', function() {
    expect(typeof changePi).toBe('function');
  });

  it('returns string if no "pi"', function() {
    expect(changePi('xyz')).toBe('xyz');
  });

  it('recognizes pi', function() {
    expect(changePi('pix')).toBe('3.14x');
  });
});