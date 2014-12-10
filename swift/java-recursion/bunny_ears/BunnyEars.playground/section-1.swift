// Playground - noun: a place where people can play

import UIKit

// given num of bunnies
// compute num of ears
// assume each bunny has 2 ears
func bunnyEars(bunnies: Int) -> Int {
    // if bunnies == 0 then return 0
    if bunnies == 0 {
        return 0
    }
    
    return 2 + bunnyEars(bunnies - 1)
}

assert(bunnyEars(0) == 0, "should be 0")
assert(bunnyEars(1) == 2, "should be 2")
assert(bunnyEars(2) == 4, "should be 4")

