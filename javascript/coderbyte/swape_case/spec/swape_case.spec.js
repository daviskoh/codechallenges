var swapeCase = require('../lib/swape_case.js');

describe('swapeCase', function() {
    it('is a function', function () {
        expect(typeof swapeCase).toBe('function');
    });

    it('should handle an empty string', function () {
        expect(swapeCase('')).toBe('');
    });

    it('should handle a single lowercase letter', function () {
        expect(swapeCase('a')).toBe('A');
    });

    it('should turn a single capital letter to lowercase', function () {
        expect(swapeCase('Z')).toBe('z');
    });

    it('should handle multi char lowercase letters', function () {
        expect(swapeCase('abc')).toBe('ABC');
    });

    it('should handle multi char capital case letters', function () {
        expect(swapeCase('ABC')).toBe('abc');
    });

    it('should handle lowercase & capital letters', function () {
        expect(swapeCase('aBcDE')).toBe('AbCde');
        expect(swapeCase('Hello World')).toBe('hELLO wORLD');
    });
});