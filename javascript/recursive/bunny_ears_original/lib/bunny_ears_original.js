function bunnyEarsOriginal (numberOfBunnies) {
    if (numberOfBunnies < 0) {
        return;
    }

    if (numberOfBunnies === 0) {
        return 0;
    }

    return 2 + bunnyEarsOriginal(numberOfBunnies - 1);
}

module.exports = bunnyEarsOriginal;