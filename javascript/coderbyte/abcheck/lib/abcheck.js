// write a function that takes a string
// return 'true' if any 'a' is 3 spaces away from 'b' 
// else return 'false'

exports.abCheck = function(string) {
  // set variables a and b
  var aIndex = string.indexOf('a');
  var bIndex = string.indexOf('b');

  if (aIndex === -1 || bIndex === -1) {
    return 'false';
  };

  // if absolute distance between aIndex & bIndex is === 3
  if (Math.abs((aIndex + 1) - bIndex) === 3) {
    return 'true';
  } else {
    return 'false';
  };
    // return 'true'
  // else
    // return another cycle of abCheck
}