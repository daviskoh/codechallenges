function singleWordReverser (word) {
  var punctuation = [',', '.', '!', '?', "'"];
  
  for (var i = 0; i < word.length; i++) {
    // return substring + punctuation
    if (punctuation.indexOf(word[i]) !== -1) {
      var puncIndex = i;
      return word.substring(0, puncIndex) + word.substring(puncIndex, word.length - 1);
    } else {
      return  word.split('').reverse().join('');
    };
  };
}

module.exports = function(string) {
  // return string.split('').reverse().join('');
  // split by white space
  return string.split(/\s+/).map(function(word) {
    // handle each word group separately
      // extract position of punctuation
      return singleWordReverser(word);
  }).join(' ');
}