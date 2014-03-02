var should = require('../dependencies/should');
var reverseString = require('../lib/reverse_string');

describe('reverseString', function() {
  it('reverses a 1 word string', function() {
    reverseString('ello').should.eql('olle');
  });

  it('reverses a string of many words keeping word order', function() {
    reverseString('ello there').should.eql('ereht olle');
  });
});