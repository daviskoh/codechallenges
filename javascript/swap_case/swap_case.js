function swapCase(string) {
    // iterative solution

    // var result = '';

    // for (var i = 0, len = string.length; i < len; i++) {
        // var char = string[i];
        // check if already capitalized
        // if (char === char.toUpperCase()) {
            // result += char.toLowerCase();
        // } else {
            // result += char.toUpperCase();
        // }
    // }

    // return result;

    // recursive solution
    if (!string.length) return string;

    // return the 1st char swap-cased then substring via subroutine
    var char = string[0],
        upperCaseChar = char.toUpperCase(),
        swappedChar = char === upperCaseChar ? char.toLowerCase() : upperCaseChar;

    return swappedChar + swapCase(string.substring(1));
}

module.exports = swapCase;
