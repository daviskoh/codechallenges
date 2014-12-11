// return true if power of 2
// else return false

// power of 2 if
    // i / 2 is divisible by 2...

// ex. 8
// 8 / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1

// until result < 3
    // keep dividing by 2
    // if result is 2
        // return true
    // else
        // return false



function powerOfTwo(i) {
    if (i < 0) return 'false';

    var result = i,
        returnVal;

    while (result > 3) {
        result = result / 2;

        if (result === 2) {
            returnVal = 'true';
        } else {
            returnVal = 'false';
        }
    }

    return returnVal;
}

module.exports = powerOfTwo;