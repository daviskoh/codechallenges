// Division Stringified
// write a func that takes two Ints dividend & divisor
// and returns its quotient in
// String form separated by commas
// for every 3 digits
// ex. 1000 / 1 => "1,000"
// Bonus: write something about runtime coplexity of solution

import UIKit

// write func that takes Int and returns quotient
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

// write func that takes Int and returns it as String
// w/ commas to separate every 3 digits
func addCommas(n: Int) -> String {
  // loop thru in reverse
  // add comma every 3rd digit
  // ex. 0001

  var result = String(String(n).characters.reverse())

  for i in 0..<result.characters.count {
    if ((i + 1) % 3) == 0 {
      result.insert(",", atIndex: result.startIndex.advancedBy(i + 1))
    }
  }

  return String(result.characters.reverse())
}


print(divide(100, divisor: 1))
print(divide(100, divisor: 2))
print(divide(100, divisor: 4))


print(addCommas(divide(1000, divisor: 1)))
print(addCommas(100000))

// NOTE: playgrounds seems to explode at about 10k+ operations