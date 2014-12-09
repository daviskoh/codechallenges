// return 3rd largest string in array

function thirdLargest(array) {
    // sort array by string length
    var sorted = array.sort(function (a, b) {
        return b.length - a.length;
    });

    // find length of string at index 2
    var length = sorted[2].length;

    for (var i = array.length - 1; i >= 0; i--) {
        var currentElement = array[i];
        if (currentElement.length === length) return currentElement;
    }
}

module.exports = thirdLargest;