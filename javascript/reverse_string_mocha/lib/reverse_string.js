function punctuationIndex (word) {
  var punctuation = [',', '.', '!', '?', "'"];

  for (var i = 0; i < word.length; i++) {
    if (punctuation.indexOf(word[i]) !== -1) {
      return i;
    };
  };

  return false;
}

function capitalized (word) {
  if (word.charAt(0).toUpperCase() + word.substring(1, word.length) === word) {
    return true;
  };
}

function singleWordReverser (word) {
  if (punctuationIndex(word) === false) {
    return word.split('').reverse().join('');
  } else {
    var reversedString = word.toLowerCase().substring(0, punctuationIndex(word)).split('').reverse().join('');
    var punctuation = word[punctuationIndex(word)];
    
    return (capitalized(word) ? reversedString.charAt(0).toUpperCase() : reversedString.charAt(0))
    + reversedString.substring(1, reversedString.length)
    + punctuation;
  };
}

module.exports = function(string) {
  // split by white space
  return string.split(/\s+/).map(function(word) {
  // handle each word group separately
    // extract position of punctuation
    return singleWordReverser(word);
  }).join(' ');
}