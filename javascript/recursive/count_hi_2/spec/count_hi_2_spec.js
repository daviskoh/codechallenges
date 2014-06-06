
// Given a string, compute recursively the number of times lowercase "hi" appears in the string,
// however do not count "hi" that have an 'x' immedately before them. 

var countHi2 = require('../lib/count_hi_2.js');

describe('countHi2', function() {
    it('is a function', function () {
        expect(typeof countHi2).toBe('function');
    });

    it('handles an empty string', function () {
        expect(countHi2('')).toBe(0);
    });

    it('handles a 1 char string that does not contain hi', function () {
        expect(countHi2('d')).toBe(0);
    });

    it('handles a 2 char string that does not contain hi', function () {
        expect(countHi2('dd')).toBe(0);
    });

    it('handles a multi char string that does not contain hi', function () {
        expect(countHi2('dsdfasdfd')).toBe(0);
    });

    it('handles a single occurence of hi', function () {
        expect(countHi2('hiaslkdjf')).toBe(1);
    });

    it('handles multiple occurrences of hi', function () {
        expect(countHi2('hiasdfhiasfasdfhiasdf')).toBe(3);
    });
});