function pow (nonNegative, integer) {
    if (integer === 0) {
        return 1;
    }

    if (integer === 1) {
        return nonNegative;
    }
}

module.exports = pow;