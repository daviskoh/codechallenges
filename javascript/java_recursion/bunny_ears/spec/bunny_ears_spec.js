var bunnyEars = require('../lib/bunny_ears');

describe('bunnyEars', function() {
  it('is a function', function() {
    expect(typeof bunnyEars).toBe('function');
  });

  it('handles a line of 0 bunnies', function() {
    expect(bunnyEars(0)).toBe(0);
  });

  it('odd bunny has 2 ears', function() {
    expect(bunnyEars(1)).toBe(2);
  });

  it('handles 2 bunnies', function() {
    expect(bunnyEars(2)).toBe(5);
  });

  it('handles 5 bunnies', function() {
    expect(bunnyEars(5)).toBe(12);
  });

  it('handles 10 bunnies', function() {
    expect(bunnyEars(10)).toBe(25);
  });
});