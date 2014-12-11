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
        // set result = true
    // else
        // set result = false



function powerOfTwo(i) {
    if (i < 0) return 'false';

    var result;

    while (i > 3) {
        i = i / 2;

        if (i === 2) {
            result = 'true';
        } else {
            result = 'false';
        }
    }

    return result;
}

module.exports = powerOfTwo;