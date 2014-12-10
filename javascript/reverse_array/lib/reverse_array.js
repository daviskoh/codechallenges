function reverseArray(array) {
    if (!array.length) return array;

    var endIndex = array.length - 1;

    return [array[endIndex]].concat(reverseArray(array.slice(0, endIndex)));
}

module.exports = reverseArray;