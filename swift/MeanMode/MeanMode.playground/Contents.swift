// Mean Mode
// write a func that takes an array of Int
// and returns true/false whether
// the mean equals the mode

// mean - average
// mode - value that occurs most often

import UIKit

// map out each num to their counts as dictionary
// ex: arr [1, 3, 1] -> [1: 2, 3: 1]
// then sort by their count
// last key is the mode

func meanEqualsMode(nums: [Int]) -> Bool {
  let mean = nums.reduce(0, combine: {$0 + $1}) / nums.count

  var counts = [Int: Int]()
  for n in nums {
    // a ?? b is shortcut for a != nil ? a! : b
    counts[n] = (counts[n] ?? 0) + 1
  }
  let mode = counts.sort { $0.1 > $1.1 }.first!.0

  return mean == mode
}

print(meanEqualsMode([1,3,3,3,5]))