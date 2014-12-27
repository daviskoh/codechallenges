// Given a string, compute recursively a new string
// where all the lowercase 'x' chars
// have been moved to the end of the string

// iterate through string
// if 1st char is x
    // then append to end
    // concat next char + endX(substring)
// else
    // concat current char + endX(substring)

import Foundation

func endX(s: String) -> String {
    if countElements(s) == 1 {
        return s
    }
    
    let firstChar = String(s[s.startIndex])
    let substring = s[advance(s.startIndex, 1)..<advance(s.endIndex, 0)]
    
    if firstChar == "x" {
        return endX(substring) + firstChar
    }

    return firstChar + endX(substring)
}

assert(endX("a") == "a", "a -> a")
assert(endX("ab") == "ab", "ab -> ab")

assert(endX("x") == "x", "x -> x")
assert(endX("xa") == "ax", "xa -> ax")
assert(endX("axa") == "aax", "axa -> aax")
assert(endX("xxhixx") == "hixxxx", "xxhixx -> hixxxx")
assert(endX("xhixhix") == "hihixxx", "xhixhix -> hihixxx")

// assert(endX("xxre") == "rexx", "should be string")
