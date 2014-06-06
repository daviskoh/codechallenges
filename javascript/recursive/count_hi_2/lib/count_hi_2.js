function countHi2 (string) {
    if (string.length === 0) {
        return 0;
    }

    var index = string.indexOf('hi');
    if (index !== -1) {
        return 1 + countHi2(string.substring(index + 1));
    }

    return countHi2(string.substring(1));
}

module.exports = countHi2;