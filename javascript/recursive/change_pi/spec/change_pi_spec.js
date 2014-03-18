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

  it('sandwiched pi', function() {
    expect(changePi('xpix')).toBe('x3.14x');
  });

  it('handles multiple "pi"', function() {
    expect(changePi('pipi')).toBe('3.143.14');
  });

  it('distinguishes between pi and p', function() {
    expect(changePi('pip')).toBe('3.14p');
  });

  it('distinguishes between pi and i', function() {
    expect(changePi('pii')).toBe('3.14i');
  });
});