function lengthOfStrings (string) {
    if (string.length === 0) {
        return 0;
    }

    return 1 + lengthOfStrings(string.substring(1));
}

module.exports = lengthOfStrings;