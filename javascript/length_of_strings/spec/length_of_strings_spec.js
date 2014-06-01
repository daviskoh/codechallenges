var lengthOfStrings = require('../lib/length_of_strings.js');

describe('lengthOfStrings', function() {
    it('is a function', function () {
        expect(typeof lengthOfStrings).toBe('function');
    });

    it('handles an empty string', function () {
        expect(lengthOfStrings('')).toBe(0);
    });

    it('handles a string of length 1', function () {
        expect(lengthOfStrings('a')).toBe(1);
    });
});