// Palindrome - word that is the same when reversed
// ex - racecar
// 1) write a func that takes a string and returns true/false
// if a palindrome/not
// 2) ignore whitespace
// ex - "taco cat"
// 3) not allowed to use .reverse()

import UIKit

// abc
// c ab
func reverseString(s: String) -> String {
  if s.characters.count == 1 {
    return s
  }

  return String(s.characters.last!) + reverseString((s.substringToIndex(s.endIndex.advancedBy(-1))))
}

print(reverseString("abc"))

func stripWhitespace(s: String) -> String {
  return s.stringByReplacingOccurrencesOfString(" ", withString: "")
}

func palindrome(s: String) -> Bool {
  return stripWhitespace(s) == stripWhitespace(reverseString(s))
}

print(palindrome("racecar"))
print(palindrome("raceca"))

print(palindrome("taco cat"))