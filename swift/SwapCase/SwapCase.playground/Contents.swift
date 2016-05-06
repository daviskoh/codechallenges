// Swap Case

import UIKit

// create a func that takes a string
// and returns it with each char in reverse case
// ex. f(aBcD) => AbCd

func swapCase(s: String) -> String {
  // iterate thru each char
  // if lowercase
    // capitalize
  // else
    // tolowercase

  var result = ""

  for char in s.characters {
    let charAsString = String(char)
    if charAsString == charAsString.lowercaseString {
      result += charAsString.uppercaseString
    } else {
      result += charAsString.lowercaseString
    }
  }

  return result
}

print(swapCase("aBcD"))