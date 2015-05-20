function flatten(array) {
    var result = [];

    for (var i = 0, len = array.length; i < len; i++) {
        var element = array[i];
        if (typeof element === 'number') result.push(element);
        if (typeof element === 'object') result = result.concat(flatten(element));
    }

    return result;
}

module.exports = flatten;
