function numberAddition (string) {
    var numbersArray = string.match(/[0-9]+/g);

    if (numbersArray) {
        return numbersArray.map(function (element) {
            return parseInt(element);
        }).reduce(function (a, b) {
            return a + b;
        });
    }

    return 0;
}

module.exports = numberAddition;