var countABCRecursive = require('../lib/count_abc.js').countABCRecursive;
var countABCRegular = require('../lib/count_abc.js').countABCRegular;

describe('countABCRecursive', function() {
    it('is a function', function () {
        expect(typeof countABCRecursive).toBe('function');
    });

    it('handles a case with no instances of abc or aba', function () {
        expect(countABCRecursive('meow')).toBe(0);
        expect(countABCRegular('meow')).toBe(0);
    });

    it('handles a single instance of abc', function () {
        expect(countABCRecursive('abc')).toBe(1);
        expect(countABCRegular('abc')).toBe(1);
    });

    it('handles a single instance of aba', function () {
        expect(countABCRecursive('aba')).toBe(1);
        expect(countABCRegular('aba')).toBe(1);
    });

    it('handles multiple cases of abc', function () {
        expect(countABCRecursive('abcxxabc')).toBe(2);
        expect(countABCRegular('abcxxabc')).toBe(2);
    });

    it('handles multiple cases of aba', function () {
        expect(countABCRecursive('abaxxabaxxaba')).toBe(3);
        expect(countABCRegular('abaxxabaxxaba')).toBe(3);
    });

    it('handles multiple cases of both abc & aba', function () {
        expect(countABCRecursive('abaxxxabcxxxabaxxxabaxxxabc')).toBe(5);
        expect(countABCRegular('abaxxxabcxxxabaxxxabaxxxabc')).toBe(5);
    });

    it('handles multiple consecutive abcs and abas', function () {
        expect(countABCRecursive('abcabcabcabaaba')).toBe(5);
        expect(countABCRegular('abcabcabcabaaba')).toBe(5);
    });
});