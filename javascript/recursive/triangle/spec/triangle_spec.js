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

    it('calculates a triange w/ a single row', function () {
        expect(triangle(1)).toBe(1);
    });

    it('calculates a triange w/ 2 rows', function () {
        expect(triangle(2)).toBe(3);
    });
});