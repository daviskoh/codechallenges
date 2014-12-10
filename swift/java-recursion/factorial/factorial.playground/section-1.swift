// Playground - noun: a place where people can play

import UIKit

func factorial(n: Int) -> Int {
    if n < 2 {
        return n
    }

    return n * factorial(n - 1)
}

assert(factorial(1) == 1, "1 should be 1")
assert(factorial(2) == 2, "2 should be 2")
assert(factorial(3) == 6, "2 should be 2")

