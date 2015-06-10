// write a func that counts the occurrences of a substring in a given string
function iterative(string, substring) {
    var count = 0;

    var indexOfFirstInstance = string.indexOf(substring),
        incr = substring.length;

    if (indexOfFirstInstance !== -1) {
        for (var i = indexOfFirstInstance, len = string.length; i < len;) {
            if (string.substring(i, i + incr) === substring) {
                count++;
                i += incr;
            } else {
                i++;
            }
        }
    }
    
    return count;
}

module.exports = iterative;
