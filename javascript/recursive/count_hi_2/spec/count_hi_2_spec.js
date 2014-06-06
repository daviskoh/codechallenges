
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
});