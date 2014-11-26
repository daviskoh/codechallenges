// Arithmetic: diff bet each numbers is consistent
// Geometric: each term after 1st is multiplied by previous

function arithGeo (array) {
    if (array.length < 2) return -1;

    var arithDiff = array[1] - array[0],
        geoDiff = array[1] / array[0]
        arithResult = true,
        geoResult = true;

    for (var i = 1; i < array.length; i++) {
        if (array[i] - array[i -1] !== arithDiff) arithResult = false;
        if (array[i] / array[i -1] !== geoDiff) geoResult = false;
    }

    if (arithResult) return 'Arithmetic';
    if (geoResult) return 'Geometric';

    return -1;
}

module.exports = arithGeo;