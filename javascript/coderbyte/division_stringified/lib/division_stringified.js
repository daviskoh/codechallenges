// divide n1 by n2
// return result as string w/ properly formatted commas
// if result is 3 digits long, return num w/ no commas

// 1,000 -------- 000,1
// 100,000 ------ 000,001
// 1,000,000 ---- 000,000,1

function divisionStringified (n1, n2) {
    var numString = Math.round(n1 / n2).toString();
    
    if (numString.length < 4) return numString;

    // reverse numString
    // split numString into groups of 3 chars
    // iterate through array
        // if element length === 3 && next element exists
        // then add commas to each end 

    var reverseNumString = numString.split('').reverse().join('').match(/.{1,3}/g);
    for (var i = 0; i < reverseNumString.length; i++) {
        if (reverseNumString[i].length === 3 && reverseNumString[i + 1]) {
            reverseNumString[i] += ',';
        }
    }

    return reverseNumString.join('').split('').reverse().join('');
}

module.exports = divisionStringified;