function countHi2 (string) {
    if (string.length === 0) {
        return 0;
    }

    return countHi2(string.substring(1));
}

module.exports = countHi2;