// Given an array of ints,
// compute the number of times that the value 11 appears in the array.
// We'll use the convention of considering only the part of the array
// that begins at the given index.
// In this way, a recursive call can pass index+1 to move down the array.
// The initial call will pass in index as 0. 

var array11 = function(array, initial) {
  // base case
  if (array.length === initial) {
    return 0;
  };

  // recursive case
  if (array[initial] === 11) {
    return 1 + array11(array, initial + 1);
  };

  return array11(array, initial + 1);
};

module.exports = array11;