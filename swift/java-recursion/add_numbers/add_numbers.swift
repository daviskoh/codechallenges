import Foundation
// Write a func that:
// - takes string of chars
// - returns count of all numbers added up

func addNumbers(string: String) -> Int {
    let regex = NSRegularExpression(pattern: "\\d+", options: nil, error: nil)!
    let match = regex.firstMatchInString(string, options: nil, range: NSMakeRange(0, count(string)))

    // check if match
    if match == nil {
        return 0
    }

    let range = match!.range
    let convertedString = string as NSString
    let matchedString = convertedString.substringWithRange(range)

    return matchedString.toInt()! + addNumbers(convertedString.substringFromIndex(range.location + range.length))
}

println(addNumbers("me12396ow"))
println(addNumbers("1fasdf2sdf3asdf4asdlfkj5"))

