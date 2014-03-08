exports.removeWhitespace = function(string) {
  // split string
  // iterate through each character
  var arrayString = string.split('');
  for (var i = arrayString.length - 1; i >= 0; i--) {
    // if character ==== ' ', remove
    if (arrayString[i] === ' ') { arrayString.splice(i, 1) };
  };
    
  // return array.join
  return arrayString.join('');
}