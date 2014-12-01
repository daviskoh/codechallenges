// take the array of numbers stored in arr and return the second lowest and second greatest numbers,
// respectively, separated by a space.
// For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers.

function sortNumber(a, b) {
    return a - b;
}

function secondGreatlow (arr) {
    var sortedArray = arr.sort(sortNumber);

    return arr[1] + ' ' + arr[arr.length - 2];
}

module.exports = secondGreatlow;