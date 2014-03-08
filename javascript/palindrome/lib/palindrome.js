// write a function that returns true if palindrome
// do not use .reverse
// do not use .replace

var reverseString = require('../lib/reverse_string').reverseString;

exports.palindrome = function(string) {
  // is palindrome if string.reverse === string
  return string.toLowerCase() === reverseString(string).toLowerCase();
}