import UIKit

// count 7
// take n: Int
// String(n)
// if char length == 0 then return 0
// check 1st char of string
// if 7 return 1 + count7(substring w/o 1st char)
// else return count7(substring w/o 1st char)

//func count7(n: Int?) -> Int {
//  if n == nil {
//    return 0
//  }
//
//  let s = String(n!)
//  
//  // NOTE: starting in Swift 2, type is used INSTEAD of Int
//  let substringAsInt = Int(s[s.startIndex.advancedBy(1)..<s.endIndex])
//
//  if s[s.startIndex] == "7" {
//    return 1 + count7(substringAsInt)
//  } else {
//    return count7(substringAsInt)
//  }
//}

func count7(n: Int) -> Int {
  let s = String(n)
  var count = 0

  for char in s.characters {
    if char == "7" {
      count++
    }
  }

  return count
}

print(count7(17)) //=> 1
print(count7(123771171)) //=> 3