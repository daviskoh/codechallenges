// ransom note
// magazine
// check if magazine has required characters to make given ransom note

module.exports = function(ransomNote, magazine) {
  // split ransomNote
  // for each character
    // check if magazine contains it
      // if any character not contained return false

  // return true
  ransomNote.split('').forEach(function(character) {
    if (magazine.indexOf(character) === -1) { return false; };
  });

  return true;
}