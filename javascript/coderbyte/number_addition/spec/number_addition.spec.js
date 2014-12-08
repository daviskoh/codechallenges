var numberAddition = require('../lib/number_addition.js');

describe('numberAddition', function() {
    it('is a function', function () {
        expect(typeof numberAddition).toBe('function');
    });

    it('should handle an empty string', function () {
        expect(numberAddition('')).toBe(0);
    });

    it('should handle a string without any numbers', function () {
        expect(numberAddition('asdf')).toBe(0);
    });

    it('should handle a simple string w/ 1 num', function () {
        expect(numberAddition('1')).toBe(1);
    });

    it('should handle mulit char strings', function () {
        expect(numberAddition('1bd4dfa4')).toBe(9);
    });

    it('should handle mulit digiti nums', function () {
        expect(numberAddition('123absdf888')).toBe(123 + 888);
    });
});