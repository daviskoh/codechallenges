var should = require('should');
var reverseString = require('../lib/reverse_string');

describe('reverseString', function() {
  it('reverses a 1 word string', function() {
    reverseString('ello').should.eql('olle');
  });
});