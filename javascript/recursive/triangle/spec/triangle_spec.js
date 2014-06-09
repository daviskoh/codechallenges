// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on.
// Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows. 

var triangle = require('../lib/triangle.js');

describe('triangle', function() {
    it('is a function', function () {
        expect(typeof triangle).toBe('function');
    });

    it('calculates a triangle w/ no rows', function () {
        expect(triangle(0)).toBe(0);
    });

    it('calculates a triangle w/ a single row', function () {
        expect(triangle(1)).toBe(1);
    });

    it('calculates a triangle w/ 2 rows', function () {
        expect(triangle(2)).toBe(3);
    });

    it('calculates a triangle w/ 3 rows', function () {
        expect(triangle(3)).toBe(6);
    });

    it('calculates a triangle w/ 5 rows', function () {
        expect(triangle(5)).toBe(1+2+3+4+5);
    });

    it('calculates a triangle w/ many rows', function () {
        for (var i = 6; i < 20; i++) {
            var sum = 0;

            for (var j = 0; j < i; j++) {
                sum += j;
            };
            
            expect(triangle(i - 1)).toBe(sum);
        };
    });
});