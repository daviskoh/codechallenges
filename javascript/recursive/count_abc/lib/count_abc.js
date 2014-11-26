function countABCRecursive (string) {
    // base case
    if (string.length === 0) {
        return 0;
    }

    // recursive cases
    var firstThree = string.substring(0, 3);
    if (firstThree === 'abc' || firstThree === 'aba') {
        return 1 + countABCRecursive(string.substring(3));
    }

    return countABCRecursive(string.substring(1));
}

function countABCRegular (string) {
    var count = 0,
        stringArray = string.split('');

    // while string !== ''
    while (stringArray.length !== 0) {
        // 1st 3 letters === 'abc' or 'aba' then add to count
        var firstThree = stringArray.join('').substring(0, 3);
        if (firstThree === 'abc' || firstThree === 'aba') {
            count++;
            
            stringArray.shift();
            stringArray.shift();
            stringArray.shift();
        } else {
            stringArray.shift();
        }
    }

    return count;
}

module.exports = {
    countABCRecursive: countABCRecursive,
    countABCRegular: countABCRegular
};