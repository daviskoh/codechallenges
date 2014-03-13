// ransom note
// magazine
// check if magazine has required characters to make given ransom note

module.exports = function(ransomNote, magazine) {
  // split ransomNote
  var ransomArray = ransomNote.toLowerCase().replace(/\s+/g, '').split('');
  var magazineLower = magazine.toLowerCase();

  // for each character
  for (var i = ransomArray.length - 1; i >= 0; i--) {
    // check if magazine contains it
    // if any character not contained return false
    if (magazineLower.indexOf(ransomArray[i]) === -1) {
      return false;
    };
  };

  return true;
}