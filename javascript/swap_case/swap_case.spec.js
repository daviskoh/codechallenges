var swapCase = require('./swap_case.js');

describe('swapCase', function() {
    it('is a function', function () {
        expect(typeof swapCase).toBe('function');
    });

    it('should handle an empty string', function () {
        expect(swapCase('')).toBe('');
    });

    it('should handle a 1 char string', function () {
        expect(swapCase('a')).toBe('A');
        expect(swapCase('B')).toBe('b');
    });

    it('should swap cases for a multi-char string', function () {
        expect(swapCase('aBcDE')).toBe('AbCde');
    });
});
