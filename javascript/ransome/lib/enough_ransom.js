// ransom note
// magazine
// check if magazine has required characters to make given ransom note

function characterCount(string, character) {
  var count = 0;

  string.split('').forEach(function(c) {
    if (c === character) { count++; };
  });

  return count;
}

module.exports = function(ransomNote, magazine) {
  // split ransomNote
  var ransomArray = ransomNote.toLowerCase().replace(/\s+/g, '').split('');
  var magazineLower = magazine.toLowerCase();

  // for each character
  for (var i = ransomArray.length - 1; i >= 0; i--) {
    // check if magazine contains it
    // if any character not contained return false
    // if count of character is less than required
    if (characterCount(magazine, ransomArray[i]) < characterCount(ransomNote, ransomArray[i])) {
      return false;
    };
  };

  return true;
}