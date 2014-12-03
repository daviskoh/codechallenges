// mode - value that occurs most often
// mean - average of all values

function mean(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

function count(array, n) {
    var result = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === n) result++;
    }

    return result;
}

// count occurrences of each value
// return element w/ greatest occurence
function mode(array) {
    var greatest = array[0];

    for (var i = 1; i < array.length; i++) {
        if (count(array, array[i]) > count(array, greatest)) greatest = array[i];
    }

    return greatest;
}

function meanMode (array) {
    if (mode(array) === mean(array)) return 1;
    
    return 0;
}

module.exports = meanMode;