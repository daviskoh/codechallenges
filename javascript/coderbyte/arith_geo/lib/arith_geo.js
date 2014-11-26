// Arithmetic: diff bet each numbers is consistent
// Geometric: each term after 1st is multiplied by previous

function isArith(array) {
    var arithDiff = array[1] - array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] !== arithDiff) return false;
    }

    return true;
}

function isGeo(array) {
    var geoDiff = array[1] / array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] / array[i-1] !== geoDiff) return false;
    }

    return true;
}

function arithGeo (array) {
    if (array.length < 2) return -1;

    if (isArith(array)) return 'Arithmetic';
    if (isGeo(array)) return 'Geometric';

    return -1;
}

module.exports = arithGeo;