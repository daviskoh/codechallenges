function isPrime(n) {
    if (n < 2) {
        return false;
    }

    // iterate through nums 2 - (n-1)
    // if n % i === 0 then return false
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

module.exports = isPrime;
