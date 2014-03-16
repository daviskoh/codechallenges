// Given n of 1 or more, return the factorial of n,
// which is n * (n-1) * (n-2) ... 1.
// Compute the result recursively (without loops). 

function factorial(n) {
  // base case
  if (n === 1) {
    return 1;
  };

  // recursive case
  return n * factorial(n - 1);
}

module.exports = factorial;