var bunnyEars = require('../lib/bunny_ears');

describe('bunnyEars', function() {
  it('is a function', function() {
    expect(typeof bunnyEars).toBe('function');
  });

  it('handles a line of 0 bunnies', function() {
    expect(bunnyEars(0)).toBe(0);
  });
});