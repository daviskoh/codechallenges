// swap out the case of each letter in string

function changeLetter(letter) {
    if (letter === letter.toLowerCase()) return letter.toUpperCase();

    return letter.toLowerCase();
}

function swapeCase(string) {
    if (!string.length) return string;

    return changeLetter(string[0]) + swapeCase(string.substring(1));
}

module.exports = swapeCase;