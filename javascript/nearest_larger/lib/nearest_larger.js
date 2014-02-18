// (a) `arr[i] < arr[j]`, AND
// (b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j]`.
// return leftmost when tie

module.exports = function nearestLarger(array, index) {
  // define result, defaults at 0
  var result = null;
  // iterate through array
  for(var i = 0; i < array.length; i++) {
  // check to see if element in each position meet result criteria:
    // greater than element in index
    // &&
    // distance bet element and array[index] is less than equivalent for current result  
    if( array[i] > array[index] && (result === null || Math.abs(i - index) < Math.abs(result - index))) {
      result = i;
    }
  }
  
  return result;
}