function reverseArray(array) {
    // if (!array.length) return array;

    // var endIndex = array.length - 1;

    // return [array[endIndex]].concat(reverseArray(array.slice(0, endIndex)));

    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;

    // var left,
    //     right,
    //     length = array.length;

    // for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
    //     var temporary = array[left];
    //     array[left] = array[right];
    //     array[right] = temporary;
    // }

    // return array;
}

module.exports = reverseArray;