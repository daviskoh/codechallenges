var powerOfTwo = require('../lib/power_of_two.js');

describe('powerOfTwo', function() {
    it('is a function', function () {
        expect(typeof powerOfTwo).toBe('function');
    });

    it('should return false for negative nums', function () {
        expect(powerOfTwo(-1)).toBe('false');
    });

    it('should handle a simple n', function () {
        expect(powerOfTwo(4)).toBe('true');
    });

    it('should handle complex case', function () {
        expect(powerOfTwo(8)).toBe('true');
        expect(powerOfTwo(16)).toBe('true');
    });

    it('should reject false nums', function () {
        expect(powerOfTwo(123)).toBe('false');
        expect(powerOfTwo(7)).toBe('false');
    });
});