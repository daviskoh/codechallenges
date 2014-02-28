exports.vowelCount = function(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  // split string into characters
  // if character is included in vowels array, plus one to counter
  // return counter
  string.split('').forEach(function(character) {
    if (vowels.indexOf(character) !== -1) {
      counter ++;
    };
  });

  return counter;
}