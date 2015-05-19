var isPrime = require('../lib/is_prime.js');

// prime number - n > 1 that has no positive divisors other than 1 & itself

describe('isPrime', function() {
    it('is a function', function () {
        expect(typeof isPrime).toBe('function');
    });

    it('should be false for numbers less than 1', function () {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-123)).toBe(false);
    });
});
