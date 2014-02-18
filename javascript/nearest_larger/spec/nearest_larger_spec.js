// Write a function, `nearest_larger(arr, i)` which takes an array and an
// index.  The function should return another index, `j`: this should
// satisfy:
//
// (a) `arr[i] < arr[j]`, AND
// (b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j]`.
//
// In case of ties (see example beow), choose the earliest (left-most)
// of the two indices. If no number in `arr` is largr than `arr[i]`,
// return `nil`.
//
var nearestLarger = require('../lib/nearest_larger');

describe('nearestLarger', function() {
  it('handles a simple case to the right', function() {
    expect(nearestLarger([2,3,4,8], 2)).toEqual(3)
  })

  it("handles a simple case to the left", function() {
    expect(nearestLarger([2,8,4,3], 2)).toEqual(1)
  })

  it('treats any 2 larger numbers like a tie', function() {
    expect(nearestLarger([2,6,4,8], 2)).toEqual(1)
  })

  it('should choose the leftmost case in a tie', function() {
    expect(nearestLarger([2,6,4,6], 2)).toEqual(1)
  })

  it('handles a case with an answer > 1 distance to the left', function() {
    expect(nearestLarger([8,2,4,3], 2)).toEqual(0)
  })

  it('handles a case with an answer > 1 distance to the right', function() {
    expect(nearestLarger([2,4,3,8], 1)).toEqual(3)
  })

  it('should return nil if no larger number is found', function() {
    expect(nearestLarger([2, 6, 4, 8], 3)).toEqual(null)
  })
})