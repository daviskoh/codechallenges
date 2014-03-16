var countx = require('../lib/countx');

describe('countx', function() {
  it('is a function', function() {
    expect(typeof countx).toBe('function');
  });

  it('recognizes x', function() {
    expect(countx('x')).toBe(1);
  });

  it('handles an empty string', function() {
    expect(countx('')).toBe(0);
  });

  it('handles 1 letter string w/o x', function() {
    expect(countx('y')).toBe(0);
  });

  it('handles complex case', function() {
    expect(countx('xxhixx')).toBe(4);
  });

  it('handles long string not containing x', function() {
    expect(countx(';sldkfja;lsdkfjas;kdf')).toBe(0);
  });

  it('ignores whitespace', function() {
    expect(countx('sdflkj xdflkj x dflkj')).toBe(2);
  });
});