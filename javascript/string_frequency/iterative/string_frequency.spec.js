var stringFrequency = require('./string_frequency.js');

describe('stringFrequency', function() {
    it('is a function', function () {
        expect(typeof stringFrequency).toBe('function');
    });

    it('should return 0 for empty strings', function () {
        expect(stringFrequency('', 'asdf')).toBe(0);
        expect(stringFrequency('', '')).toBe(0);
    });
});
