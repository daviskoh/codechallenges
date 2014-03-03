function punctuationIndex (word) {
  var punctuation = [',', '.', '!', '?', "'"];

  for (var i = 0; i < word.length; i++) {
    if (punctuation.indexOf(word[i]) !== -1) {
      return i;
    };
  };

  return false;
}

function singleWordReverser (word) {
  if (punctuationIndex(word) === false) {
    return word.split('').reverse().join('');
  } else {
    return word.substring(0, punctuationIndex(word)).split('').reverse().join('') + word[punctuationIndex(word)];
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