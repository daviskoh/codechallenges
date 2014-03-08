var reverseString = function(string) {
  if (string.length === 0) { return string };

  return reverseString(string.substring(1)) + string.charAt(0);
}

exports.reverseString = reverseString;