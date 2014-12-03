var divisionStringified = require('../lib/division_stringified.js');

describe('divisionStringified', function() {
    it('is a function', function () {
        expect(typeof divisionStringified).toBe('function');
    });

    it('should handle a number less than 4 digits', function () {
        expect(divisionStringified(3, 1)).toBe('3');
    });
});