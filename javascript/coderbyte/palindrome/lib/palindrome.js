function palindrome (string) {
    // sanitize string
        // remove whitespace

    // check equality
    return string.toLowerCase().replace(/\s/g, '') === string.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
}

module.exports = palindrome;