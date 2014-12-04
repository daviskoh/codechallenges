// swap out the case of each letter in string

function changeLetter(letter) {
    var lowerCaseLetter = letter.toLowerCase();

    if (letter === lowerCaseLetter) return letter.toUpperCase();

    return lowerCaseLetter;
}

function swapeCase(string) {
    if (!string.length) return string;

    return changeLetter(string[0]) + swapeCase(string.substring(1));
}

module.exports = swapeCase;