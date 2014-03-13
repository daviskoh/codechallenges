// ransom note
// magazine
// check if magazine has required characters to make given ransom note

module.exports = function(ransomNote, magazine) {
  // return magazine contain ransomNote
  return magazine.charAt(ransomNote) !== -1;
}