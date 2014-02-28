var vowelCount = require('../lib/vowel_count').vowelCount;

describe('vowelCount', function() {
  it('does something', function() {
    expect(vowelCount('e')).not.toBe(null);
  });

  it('handles a simple case with 1 vowel', function() {
    expect(vowelCount('hell')).toBe(1);
  });

  it('handles a simple case with 2 vowels', function() {
    expect(vowelCount('hello')).toBe(2);
  });
});