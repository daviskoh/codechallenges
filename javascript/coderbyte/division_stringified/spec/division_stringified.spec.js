var divisionStringified = require('../lib/division_stringified.js');

describe('divisionStringified', function() {
    it('is a function', function () {
        expect(typeof divisionStringified).toBe('function');
    });

    it('should handle a number less than 4 digits', function () {
        expect(divisionStringified(3, 1)).toBe('3');
    });

    it('should handle a simple case of 4 digits', function () {
        expect(divisionStringified(10000, 10)).toBe('1,000');
    });

    it('should handle a case of 6 digits', function () {
        expect(divisionStringified(100000, 1)).toBe('100,000');
    });

    it('should handle a case of > 6 digits', function () {
        expect(divisionStringified(1000000, 1)).toBe('1,000,000');
    });

    it('should round decimals', function () {
        expect(divisionStringified(1, 10)).toBe('0');
        expect(divisionStringified(123456789, 10000)).toBe('12,346');
    });
});