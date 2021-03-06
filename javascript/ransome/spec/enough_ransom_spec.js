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

  it('handles more complex 1 word case', function() {
    ransomNote = 'abc';
    magazine = 'abec';

    expect(enoughRansom(ransomNote, magazine)).toBe(true);
  });

  it('returns false for complex 1 word case', function() {
    ransomNote = 'abc';
    magazine = 'abeee';

    expect(enoughRansom(ransomNote, magazine)).toBe(false);
  });

  it('ignores whitespace', function() {
    ransomNote = 'abc def';
    magazine = 'zzzzazzzzbzzzczzzdzzezzf';

    expect(enoughRansom(ransomNote, magazine)).toBe(true);
  });

  it('makes sure there are enough characters', function() {
    ransomNote = 'aabc';
    magazine = 'abc';    

    expect(enoughRansom(ransomNote, magazine)).toBe(false);
  });
});