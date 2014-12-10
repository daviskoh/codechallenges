function reverseArray(enumerable) {
    // recursive
    if (!enumerable.length) return enumerable;

    var endIndex = enumerable.length - 1,
        lastValue = enumerable[endIndex];

    return (typeof enumerable === 'string' ? lastValue : [lastValue]).concat(reverseArray(enumerable.slice(0, endIndex)));

    // iterative
    // var result = [];
    // for (var i = array.length - 1; i >= 0; i--) {
    //     result.push(array[i]);
    // }

    // return result;

    // swap
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