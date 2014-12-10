function reverseArray(array) {
    // if (!array.length) return array;

    // var endIndex = array.length - 1;

    // return [array[endIndex]].concat(reverseArray(array.slice(0, endIndex)));

    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}

module.exports = reverseArray;