// Palindrome - word that is the same when reversed
// ex - racecar
// write a func that takes a string and returns true/false 
// if a palindrome/not

import UIKit

func palindrome(s: String) -> Bool {
  return s == String(s.characters.reverse())
}

print(palindrome("racecar"))
print(palindrome("raceca"))

