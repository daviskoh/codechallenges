var countABC = require('../lib/count_abc.js');

describe('countABC', function() {
    it('is a function', function () {
        expect(typeof countABC).toBe('function');
    });

    it('handles a case with no instances of abc or aba', function () {
        expect(countABC('meow')).toBe(0);
    });

    it('handles a single instance of abc', function () {
        expect(countABC('abc')).toBe(1);
    });
});