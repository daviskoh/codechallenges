function pow (nonNegative, integer) {
    if (integer === 0) {
        return 1;
    }

    if (integer === 1) {
        return nonNegative;
    }

    return nonNegative * pow(nonNegative, integer - 1)
}

module.exports = pow;