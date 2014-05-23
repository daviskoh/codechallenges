function countABC (string) {
    // base case
    if (string.length === 0) {
        return 0;
    }

    // recursive cases
    var firstThree = string.substring(0, 3);
    if (firstThree === 'abc' || firstThree === 'aba') {
        return 1 + countABC(string.substring(3));
    }

    return countABC(string.substring(1));
}

module.exports = countABC;