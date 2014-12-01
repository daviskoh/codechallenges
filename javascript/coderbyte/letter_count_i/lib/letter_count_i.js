// split string into array
// loop through array
// map into array of repeated letter counts
// sort array then return last

function uniqueChars(string) {
    var chars = [];

    for (var i = 0; i < string.length; i++) {
        if (chars.indexOf(string[i] !== -1)) chars.push(string[i]);
    }

    return chars;
}

function singleLetterCount(string, letter) {
    if (!string.length) return 0;

    if (string[0].indexOf(letter) !== -1) return 1 + singleLetterCount(string.substring(1), letter);

    return singleLetterCount(string.substring(1), letter);
}

function letterCountI (string) {
    if (!string.length) return -1;

    var stringArray = string.split(/[ ]+/),
        letterCountArray = [],
        resultCount = 1;
        result = '';

    for (var i = 0; i < stringArray.length; i++) {
        var uniqueCharsArray = uniqueChars(stringArray[i]);

        for (var j = 0; j < uniqueCharsArray.length; j++) {
            var currentCount = singleLetterCount(stringArray[i], uniqueCharsArray[j]);
            
            // if currentCount > resultCount then result = stringArray[i]
            if (currentCount > resultCount) {
                resultCount = currentCount;
                result = stringArray[i];
            }
        }
    }

    return result || -1;
}

module.exports = letterCountI;