// write a func that counts the occurrences of a substring in a given string
function iterative(string, substring) {
    var count = 0;

    // find 1st occurrence of subtring
    var indexOfFirstInstance = string.indexOf(substring);
    if (indexOfFirstInstance !== -1) return 1;
    
    return count;
}

module.exports = iterative;
