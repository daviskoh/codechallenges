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

    it('handles a single instance of aba', function () {
        expect(countABC('aba')).toBe(1);
    });

    it('handles multiple cases of abc', function () {
        expect(countABC('abcxxabc')).toBe(2);
    });

    it('handles multiple cases of aba', function () {
        expect(countABC('abaxxabaxxaba')).toBe(3);
    });

    it('handles multiple cases of both abc & aba', function () {
        expect(countABC('abaxxxabcxxxabaxxxabaxxxabc')).toBe(5);
    });
});