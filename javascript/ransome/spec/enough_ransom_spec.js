var enoughRansom = require('../lib/enough_ransom');

describe('enoughRansom', function() {
  var ransomNote, magazine;

  it('is a function', function() {
    expect(typeof enoughRansom).toBe('function');
  });

  it('handles a simple case', function() {
    ransomNote = 'a';
    magazine = 'ab';

    expect(enoughRansom(ransomNote, magazine)).toBe(true);
  });

  it('is case insensitive', function() {
    ransomNote = 'A';
    magazine = 'ab';
    
    expect(enoughRansom(ransomNote, magazine)).toBe(true);
  });
});