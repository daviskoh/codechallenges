// **Q1**: Write a method, `pow`, that takes two (non-negative, integer)
// numbers, `base` and `exponent` and returns `base` raised to the
// `exponent` power. (No fair using Ruby's `base ** exponent` notation!).

var pow = require('../lib/pow.js');

describe('pow', function() {
    it('is a function', function () {
        expect(typeof pow).toBe('function');
    });

    it('handles any number raised to the 0th power', function () {
        for (var i = 10; i >= 0; i--) {
            expect(pow(i, 0)).toBe(1);
        };
    });

    it('handles any number raised to the 1st power', function () {
       for (var i = 10; i >= 0; i--) {
            expect(pow(i, 1)).toBe(i);
        };
    });

    it('handles a number raised to the 2nd power', function () {
       for (var i = 10; i >= 0; i--) {
            expect(pow(i, 2)).toBe(Math.pow(i, 2));
        }; 
    });
});