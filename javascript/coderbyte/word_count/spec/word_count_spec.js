var wordCount = require('../lib/word_count').wordCount;

describe('wordCount', function() {
  it('is a function', function() {
    expect(typeof wordCount === 'function').toBe(true);
  });

  it('handles a simple case without punctuation', function() {
    expect(wordCount('Hello World')).toBe(2);
  });

  it('handles a sentence with punctuation', function() {
    expect(wordCount("Argument goes, here.")).toBe(3);
  });
});