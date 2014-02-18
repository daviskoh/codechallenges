// write method that takes an array and returns sum of number values
// regardless of how deep

function sumArray(array) {
  var result = 0;

  array.forEach(function(el) {
    if (typeof el === 'number') {
      result += el;
    } else if (typeof el === 'object') {
      result += sumArray(el);
    }
  });

  return result;
}

module.exports = sumArray;