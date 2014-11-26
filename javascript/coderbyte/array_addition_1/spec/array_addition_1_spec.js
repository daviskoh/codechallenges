var arrayAddition1 = require('../lib/array_addition_1.js');

describe('arrayAddition1', function() {
    it('is a function', function () {
        expect(typeof arrayAddition1).toBe('function');
    });

    it('should handle a simple true case', function () {
        expect(arrayAddition1([1,2,3])).toBe('true');
    });

    it('should handle a simple false case', function () {
        expect(arrayAddition1([1, 3, 5])).toBe('false');
    });

    it('should handle complex case from ex', function () {
        expect(arrayAddition1([4, 6, 23, 10, 1, 3])).toBe('true');
    });
});