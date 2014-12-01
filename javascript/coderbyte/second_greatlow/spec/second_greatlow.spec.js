var secondGreatlow = require('../lib/second_greatlow.js');

describe('secondGreatlow', function() {
    it('is a function', function () {
        expect(typeof secondGreatlow).toBe('function');
    });

    it('should handle a simple case', function () {
        expect(secondGreatlow([7, 7, 7])).toBe('7 7');
    });

    it('should handle different numbers', function () {
        expect(secondGreatlow([1,5,8,2])).toBe('2 5');
    });

    it('should handle an array of length 2', function () {
        expect(secondGreatlow([8,5])).toBe('8 5');
    });

    it('should handle multi digit numbers', function () {
        expect(secondGreatlow([7, 12, 98, 106])).toBe('12 98');
    });
});