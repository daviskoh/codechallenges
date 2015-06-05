function swapCase(string) {
    var result = '';

    for (var i = 0, len = string.length; i < len; i++) {
        var char = string[i];
        // check if already capitalized
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

module.exports = swapCase;
