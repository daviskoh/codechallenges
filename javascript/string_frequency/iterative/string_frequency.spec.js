var stringFrequency = require('./string_frequency.js');

describe('stringFrequency', function() {
    it('is a function', function () {
        expect(typeof stringFrequency).toBe('function');
    });

    it('should return 0 for empty strings', function () {
        expect(stringFrequency('', 'asdf')).toBe(0);
        expect(stringFrequency('', 'z')).toBe(0);
    });

    it('should find at least a single occurrence of a substring', function () {
        expect(stringFrequency('a', 'a')).toBe(1);
        expect(stringFrequency('abcd', 'b')).toBe(1);
    });

    it('should find multiple occurrences of a single char substring', function () {
        expect(stringFrequency('abadlkja', 'a')).toBe(3);
        expect(stringFrequency('111144411', '1')).toBe(6);
    });
});
