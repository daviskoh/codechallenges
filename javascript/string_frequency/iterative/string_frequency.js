// write a func that counts the occurrences of a substring in a given string
function iterative(string, substring) {
    var count = 0;

    // find 1st occurrence of subtring
    var indexOfFirstInstance = string.indexOf(substring);
    if (indexOfFirstInstance !== -1) {
        // start at firstIndex
        // iterate through string
        // if element === substring then count++
        for (var i = indexOfFirstInstance, len = string.length; i < len; i++) {
            if (string[i] === substring) count++;
        }
    }
    
    return count;
}

module.exports = iterative;
