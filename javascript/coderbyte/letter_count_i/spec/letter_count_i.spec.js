var letterCountI = require('../lib/letter_count_i.js');

describe('letterCountI', function() {
    it('is a function', function () {
        expect(typeof letterCountI).toBe('function');
    });

    it('should handle an empty string', function () {
        expect(letterCountI('')).toBe(-1);
    });

    it('should handle a single word string', function () {
        expect(letterCountI('meow')).toBe(-1);
    });

    it('should handle a simple case', function () {
        expect(letterCountI('hello due')).toBe('hello');
    });

    it('should handle a complex case', function () {
        expect(letterCountI('red none yellow')).toBe('none');
    });

    it('should be case insensitive', function () {
        expect(letterCountI('Ello friend')).toBe('Ello');
    });
});