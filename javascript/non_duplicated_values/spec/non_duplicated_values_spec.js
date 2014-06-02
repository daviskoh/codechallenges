// write a function that takes in an array
// & returns an array of values that are contained only once

var nonDuplicatedValues = require('../lib/non_duplicated_values.js');

describe('nonDuplicatedValues', function() {
    it('is a function', function () {
        expect(typeof nonDuplicatedValues).toBe('function');
    });

    it('handles an empty array', function () {
        expect(nonDuplicatedValues([])).toEqual([]);
    });

    it('handles an array with a single element', function () {
        expect(nonDuplicatedValues(['ello'])).toEqual(['ello']);
    });

    it('handles a simple case', function () {
        expect(nonDuplicatedValues(['foo', 'foo', 'ello'])).toEqual(['ello']);
    });
});