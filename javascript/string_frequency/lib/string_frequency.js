function stringFrequency (string, substring) {
    // base case
    if (string.length === 0) {
        return 0;
    }

    // recursive case
    // if string contains substring
    var index = string.indexOf(substring);
    if (index !== -1) {
        return 1 + stringFrequency(string.substring(index + substring.length), substring);
    }

    return 0 + stringFrequency(string.substring(1), substring);
}

module.exports = stringFrequency;