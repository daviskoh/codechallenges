// write a function that calculates the average of its arguments
function average(numbers) {
  var numerator = 0;
  var denominator;

  var calculateAverage = function(numbersArray) {
    // base case
    // if arguments list is empty,
    if (numbers.length === 0) {
      return numerator / denominator;
    };

    // recursive case
      // take next number & add to numerator
      // increment denominator by 1
    var currrentNumber = numbers.shift();
    numerator += currrentNumber;
    denominator = currrentNumber;

    return calculateAverage(numbers);
  }

  return calculateAverage(numbers);
}


module.exports = average;