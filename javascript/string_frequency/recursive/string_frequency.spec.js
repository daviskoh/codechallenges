var stringFrequency = require('../lib/string_frequency.js');

describe('stringFrequency', function() {
    it('is a function', function () {
        expect(typeof stringFrequency).toBe('function');
    });

    it('handles a case w/ non occurence', function () {
        expect(stringFrequency('', 's')).toBe(0);
    });

    it('handles a case w/ single occurence', function () {
        expect(stringFrequency('s', 's')).toBe(1);
    });

    it('handles multiple occurences', function () {
        expect(stringFrequency('ssss', 's')).toBe(4);
    });

    it('handles multi-character substrings', function () {
       expect(stringFrequency('ssss', 'ss')).toBe(2); 
    });
});