// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication). 

var bunnyEarsOriginal = require('../lib/bunny_ears_original.js');

describe('bunnyEarsOriginal', function() {
    it('is a function', function () {
        expect(typeof bunnyEarsOriginal).toBe('function');
    });

    it('handles invalid numbers of bunnies', function () {
        expect(bunnyEarsOriginal(-1)).toBe(undefined);
    });

    it('handles 0 bunnies', function () {
        expect(bunnyEarsOriginal(0)).toBe(0);
    });

    it('handles a single bunny', function () {
        expect(bunnyEarsOriginal(1)).toBe(2);
    });

    it('handles multiple bunnies', function () {
        for (var i = 10 - 1; i >= 0; i--) {
            expect(bunnyEarsOriginal(i)).toBe(i * 2);
        };
    });
});