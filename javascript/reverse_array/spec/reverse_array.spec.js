var reverseArray = require('../lib/reverse_array.js');

describe('reverseArray', function() {
    it('is a function', function () {
        expect(typeof reverseArray).toBe('function');
    });

    it('returns input if its empty', function () {
        expect(reverseArray([])).toEqual([]);
    });

    it('returns input if it only contains a single element', function () {
        expect(reverseArray(['meow'])).toEqual(['meow']);
    });

    it('should handle a case of 2 elements', function () {
        expect(reverseArray(['meow', 'bro'])).toEqual(['bro', 'meow']);
    });

    it('should handle multi elements', function () {
        expect(reverseArray([1,5,3,9])).toEqual([9,3,5,1]);
    });
});