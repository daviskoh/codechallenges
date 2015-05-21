var flatten = require('../lib/flatten.js');

describe('flatten', function() {
    it('is a function', function () {
        expect(typeof flatten).toBe('function');
    });

    it('should handle an empty array', function () {
        expect(flatten([])).toEqual([]);
    });

    it('should handle an array w/ element', function () {
        expect(flatten([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    it('should handle an array 2 levels deep', function () {
        expect(flatten([1,2,3,[4,5],6])).toEqual([1,2,3,4,5,6]);
    });

    it('should handle an array multi levels deep', function () {
        expect(flatten([1,2,[3,4,[5,6]]])).toEqual([1,2,3,4,5,6]);
        expect(flatten([1,[2,3],[4,[5,6,[7]]],8])).toEqual([1,2,3,4,5,6,7,8]);
    });
    
    it('should accept all primite types', function () {
        expect(flatten(['hello', [true, [1.2,[null, [undefined]]]]])).toEqual([
            'hello',
            true,
            1.2,
            null,
            undefined
        ]);
    });
});

