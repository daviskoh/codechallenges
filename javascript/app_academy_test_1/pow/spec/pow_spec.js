// **Q1**: Write a method, `pow`, that takes two (non-negative, integer)
// numbers, `base` and `exponent` and returns `base` raised to the
// `exponent` power. (No fair using Ruby's `base ** exponent` notation!).

var pow = require('../lib/pow.js');

describe('pow', function() {
    it('is a function', function () {
        expect(typeof pow).toBe('function');
    });
});