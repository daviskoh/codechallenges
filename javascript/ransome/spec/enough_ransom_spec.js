var enoughRansom = require('../lib/enough_ransom');

describe('enoughRansom', function() {
  it('is a function', function() {
    expect(typeof enoughRansom).toBe('function');
  });

  it('handles a simple case', function() {
    var ransomNote = 'a';
    var magazine = 'ab';
    expect(enoughRansom(ransomNote, magazine)).toBe(true);
  });

  it('is case insensitive', function() {
    
  });
});