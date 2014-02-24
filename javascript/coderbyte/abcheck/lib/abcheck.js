// write a function that takes a string
// return 'true' if any 'a' is 3 spaces away from 'b' 
// else return 'false'

var abCheck = function(string) {
  // set variables a and b
  var aIndex = string.indexOf('a');
  var bIndex = string.indexOf('b');

  if (aIndex === -1 || bIndex === -1) {
    return 'false';
  };

  // if absolute distance between aIndex & bIndex is === 3
  if (Math.abs((aIndex + 1) - bIndex) === 3 || Math.abs((bIndex + 1) - aIndex) === 3) {
    return 'true';
  } else {
    // return another cycle of abCheck without the current 'a' substring
    return abCheck(string.substring(aIndex + 1, string.length));
  };
}

exports.abCheck = abCheck;