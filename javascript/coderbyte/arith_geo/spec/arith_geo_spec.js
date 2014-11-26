var arithGeo = require('../lib/arith_geo.js');

// Arithmetic: diff bet each numbers is consistent
// Geometric: each term after 1st is multiplied by previous

describe('arithGeo', function() {
    it('is a function', function () {
        expect(typeof arithGeo).toBe('function');
    });

    it('should handle non sequences', function () {
        expect(arithGeo([1])).toBe(-1);
    });

    it('should handle a simple arith case', function () {
        expect(arithGeo([1, 2])).toBe('Arithmetic');
    });

    it('should handle a complex arith case', function () {
        expect(arithGeo([2, 4, 6])).toBe('Arithmetic');
    });

    it('should handle a simple geo case', function () {
        expect(arithGeo([2, 6, 18])).toBe('Geometric');
    });
});