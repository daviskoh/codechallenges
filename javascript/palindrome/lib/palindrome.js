// write a function that returns true if palindrome
// do not use .reverse
// do not use .replace

var reverseString = require('../lib/reverse_string').reverseString;
var removeWhitespace = require('../lib/remove_whitespace').removeWhitespace;

exports.palindrome = function(string) {
  // is palindrome if string.reverse === string
  return removeWhitespace(string.toLowerCase()) === removeWhitespace(reverseString(string).toLowerCase());
}