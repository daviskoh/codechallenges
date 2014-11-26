// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr
// and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array,
// otherwise return the string false.

// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
// The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

// [1, 3, 4, 6, 10, 23]


// sum up all numbers (except largest)
// check sum === largest
    // return 'true'
// loop through sorted
    // subtract each num
    // check for equality to 
        // return 'true'

function sumArray(array) {
    var result = 0;

    for (var i = array.length - 1; i >= 0; i--) {
        result += array[i];
    }

    return result;
}

function arrayAddition1 (array) {
    var sorted = array.sort(function (a, b) {
        return a - b;
    }),
        largest = sorted[array.length - 1],
        subArraySum = sumArray(sorted.slice(0, array.length - 1));
    
    if (subArraySum === largest) return 'true';

    for (var i = 0; i < sorted.length - 1; i++) {
        var currentSum = subArraySum - sorted[i];

        if (currentSum === largest) return 'true';
    }

    return 'false';
}

module.exports = arrayAddition1;