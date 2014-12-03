// insert dashes bet 2 odd number digits
// 0 is not odd num

function isOdd(numString) {
    if (!numString) return;
    if (numString === '0') return;

    return parseInt(numString) % 2 !== 0;
}

function dashInsert (n) {
    var nString = n.toString(),
        result = '';

    // iterate through nString
        // if nString[i] && nString[i + 1] are odd nums
            // then result += nString[i] + '-'
        // else
            // then result += nString[i]

    for (var i = 0; i < nString.length; i++) {
        if (isOdd(nString[i]) && isOdd(nString[i + 1])) {
            result += nString[i] + '-';
        } else {
            result += nString[i];
        }
    }

    return result;
}

module.exports = dashInsert;