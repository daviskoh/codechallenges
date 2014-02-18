sum_arrays = require('../lib/sum_arrays')

describe('sum_arrays', function() {
  it('returns content is array contains only 0', function() {
    expect(sum_arrays([0])).toEqual(0)
  })

  it('returns the only number in array if array contains 1 number', function() {
    expect(sum_arrays([1, 'ello'])).toEqual(1)
  })

  it('takes a adds numbers in a 1 level deep array', function() {
    expect(sum_arrays([1,2,3,4,5])).toEqual(15)
  })

  it('takes a adds ONLY numbers in a 1 level deep array', function() {
    expect(sum_arrays([1,2,3,4,5, 'foo', 'bro'])).toEqual(15)
  })

  it('adds numbers in arrays of all stack levels', function() {
    expect(sum_arrays([1,2,3,4,5, 'foo', 'bro', [1,2,3,4,5, 'foo', 'bro']])).toEqual(30)
  })
})