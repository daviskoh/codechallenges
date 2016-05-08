// Write a func that determines whether
// a given String has the same num of
// x's and o's

import UIKit

func hasEqualXAndO(s: String) -> Bool {
  // count num of x's
  // count num of o's
  // return x == o

//  let xCount = s.componentsSeparatedByString("x").count - 1
//  let oCount = s.componentsSeparatedByString("o").count - 1

  // IF componentsSeparatedByString already iterates
  // through s in order to count components...
  // it may be more efficient to simply count myself using
  // a single iteration vs the presumably 2 from previous solution
  var xCount = 0
  var oCount = 0

  for char in s.characters {
    if char == Character("x") {
      xCount++
    }

    if char == Character("o") {
      oCount++
    }
  }

  if xCount == 0 || oCount == 0 {
    return false
  }

  return xCount == oCount
}

print(hasEqualXAndO("x")) //=> false
print(hasEqualXAndO("o")) //=> false
print(hasEqualXAndO("xoox")) //=> true

print(hasEqualXAndO("")) //=> false