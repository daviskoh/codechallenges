// take the array of numbers stored in arr and return the second lowest and second greatest numbers,
// respectively, separated by a space.
// For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers.

function sortNumber(a, b) {
    return a - b;
}

function unique(arr) {
    var uniqueArr = [];

    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];

        if (uniqueArr.indexOf(currentElement) === -1) uniqueArr.push(currentElement);
    }

    return uniqueArr;
}

function secondGreatlow (arr) {
    var sortedArray = arr.sort(sortNumber),
        uniqueArr = unique(sortedArray);

    if (uniqueArr.length < 2) return uniqueArr[0] + ' ' + uniqueArr[0];

    return uniqueArr[1] + ' ' + uniqueArr[uniqueArr.length - 2];
}

module.exports = secondGreatlow;