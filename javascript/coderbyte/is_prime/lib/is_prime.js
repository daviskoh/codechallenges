exports.isPrime = function(n) {
  if (n < 3) { return 'false' };
  if (n === 3) { return 'true' };

  // iterate through 2..n-1
  for (var i = 2; i < n-1; i++) {
    // if evenly divisible by any number, prime number
    // else return 'false'
    if (n % i === 0) {
      return 'false';
    } else {
      return 'true';
    };
  };
}