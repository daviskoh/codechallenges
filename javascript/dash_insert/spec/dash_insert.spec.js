var dashInsert = require('../lib/dash_insert.js');

describe('dashInsert', function() {
    it('is a function', function () {
        expect(typeof dashInsert).toBe('function');
    });

    it('should not insert a dash for a number with no odd num digits', function () {
        expect(dashInsert(842)).toBe('842');
    });

    it('should handle a simple 2 digit case', function () {
        expect(dashInsert(99)).toBe('9-9');
        expect(dashInsert(77)).toBe('7-7');
    });

    it('should not treat 0 as a odd num', function () {
        expect(dashInsert(8008)).toBe('8008');
    });

    it('should handle single digits', function () {
        expect(dashInsert(8)).toBe('8');
        expect(dashInsert(3)).toBe('3');
    });
});