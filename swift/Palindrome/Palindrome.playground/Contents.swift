// Palindrome - word that is the same when reversed
// ex - racecar
// 1) write a func that takes a string and returns true/false
// if a palindrome/not
// 2) ignore whitespace
// ex - "taco cat"

import UIKit

func stripWhitespace(s: String) -> String {
  return s.stringByReplacingOccurrencesOfString(" ", withString: "")
}

func palindrome(s: String) -> Bool {
  return stripWhitespace(s) == stripWhitespace(String(s.characters.reverse()))
}

print(palindrome("racecar"))
print(palindrome("raceca"))

print(palindrome("taco cat"))