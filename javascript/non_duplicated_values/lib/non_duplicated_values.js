function nonDuplicatedValues (array) {
    var result = [];

    array.forEach(function (element) {
        if (array.join('').split(element).length - 1 === 1) {
            result.push(element);
        }
    });

    return result;
}

module.exports = nonDuplicatedValues;