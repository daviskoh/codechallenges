var wordCount = require('../lib/word_count').wordCount;

describe('wordCount', function() {
  it('is a function', function() {
    expect(typeof wordCount === 'function').toBe(true);
  });
});