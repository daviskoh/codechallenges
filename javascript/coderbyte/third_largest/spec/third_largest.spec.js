var thirdLargest = require('../lib/third_largest.js');

describe('thirdLargest', function() {
    it('is a function', function () {
        expect(typeof thirdLargest).toBe('function');
    });

    it('should handle a simple case', function () {
        expect(thirdLargest(['ccc', 'a', 'bb'])).toBe('a');
    });

    it('given a tie, should select the last occurence', function () {
        expect(thirdLargest(['eeee', 'aa', 'bb', 'meoooow'])).toBe('bb');
    });

    it('should handle multi occurences', function () {
        expect(thirdLargest(['eieie', 'ccccc', 'alsdkfjalksdjf', 'zzzzz'])).toBe('zzzzz');
    });
});