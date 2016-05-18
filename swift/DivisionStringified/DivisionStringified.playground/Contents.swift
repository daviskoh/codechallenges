// Division Stringified
// write a func that takes two Ints dividend & divisor
// and returns its quotient in
// String form separated by commas
// for every 3 digits
// ex. 1000 / 1 => "1,000"
// Bonus: write something about runtime coplexity of solution

import UIKit

// write func that takes int and returns quotient
// quotient - how many times a num can be subtracted from another num evenly
// keep subtracting divisor from divident until divident < divisor
func divide(dividend: Int, divisor: Int) -> Int {
  var mutableDividend = dividend
  var result = 0

  while mutableDividend >= divisor {
    mutableDividend -= divisor
    result += 1
  }

  return result
}

print(divide(100, divisor: 1))
print(divide(100, divisor: 2))
print(divide(100, divisor: 4))
