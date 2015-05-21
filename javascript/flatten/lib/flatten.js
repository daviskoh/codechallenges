function flatten(array) {
    var result = [];

    for (var i = 0, len = array.length; i < len; i++) {
        var element = array[i];
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

module.exports = flatten;
