// Given a string, compute recursively (no loops): 
// the number of lowercase 'x' chars in the string. 

function countx(string) {
  // base case
  if (string.length === 0) {
    return 0;
  };

  // recursive case
  if (string.charAt(0) === 'x') {
    return 1 + countx(string.substring(1));
  };

  return countx(string.substring(1));
}

module.exports = countx;