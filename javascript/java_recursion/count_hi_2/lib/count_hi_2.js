function countHi2 (string) {
    if (string.length === 0) {
        return 0;
    }

    var indexX = string.indexOf('xhi');
    if (indexX !== -1) {
        return countHi2(string.substring(indexX + 3));
    }

    var indexH = string.indexOf('hi');
    if (indexH !== -1) {
        return 1 + countHi2(string.substring(indexH + 2));
    }

    return countHi2(string.substring(1));
}

module.exports = countHi2;