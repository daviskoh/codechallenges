// Flatten
// write a func that takes an Array inifite levels deep
// and flattens it out
// ex [1, [2,3]] => [1, 2, 3]

import UIKit

// iterate through array
// if != array then push into result
// if == array then result.concat(element)

func flatten(array: [AnyObject]) -> [AnyObject] {
  var result: [AnyObject] = []

  for element in array {
    print(element)
    if element is [AnyObject] {

    } else {
      result.append(element)
    }
  }

  return result as [AnyObject]
}

print(flatten([]))
print(flatten([1,2,3]))