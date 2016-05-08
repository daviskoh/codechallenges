// Write a func that determines whether
// a given String has the same num of
// x's and o's

import UIKit

func hasEqualXAndO(s: String) -> Bool {
  // count num of x's
  // count num of o's
  // return x == o

  let xCount = s.componentsSeparatedByString("x").count - 1
  let oCount = s.componentsSeparatedByString("o").count - 1

  if xCount == 0 || oCount == 0 {
    return false
  }

  return xCount == oCount
}

print(hasEqualXAndO("x")) //=> false
print(hasEqualXAndO("o")) //=> false
print(hasEqualXAndO("xoox")) //=> true

print(hasEqualXAndO("")) //=> false