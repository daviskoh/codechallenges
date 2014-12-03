var meanMode = require('../lib/mean_mode.js');

describe('meanMode', function() {
    it('is a function', function () {
        expect(typeof meanMode).toBe('function');
    });

    it('correctly handles when mode === mean', function () {
        expect(meanMode([1,3,3,3,5])).toBe(1);
    });

    it('handles when mode !== mean', function () {
        expect(meanMode([1,2,3])).toBe(0);
    });
});