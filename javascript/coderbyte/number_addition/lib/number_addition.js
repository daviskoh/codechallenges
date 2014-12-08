function numberAddition (string) {
    // var numbersArray = string.match(/[0-9]+/g);

    // if (numbersArray) {
    //     return numbersArray.map(function (element) {
    //         return parseInt(element);
    //     }).reduce(function (a, b) {
    //         return a + b;
    //     });
    // }

    // return 0;

    if (!string.length) return 0;

    var numMatch = string.match(/[0-9]+/);

    if (!numMatch) return 0;

    return parseInt(numMatch[0]) + numberAddition(string.substring(numMatch.index + numMatch[0].length));
}

module.exports = numberAddition;