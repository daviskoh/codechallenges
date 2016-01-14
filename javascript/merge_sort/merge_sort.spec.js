const mergeSort = require('./merge_sort.js');

describe('mergeSort', () => {
  var arr;

  afterEach(() => {
    expect(mergeSort(arr)).toEqual(arr.slice().sort());
  });

  it('should return the array when length is 1', () => {
    arr = [1];
  });

  it('should sort an array of length 1', () => {
    arr = [3,1];
  });

  it('should sort arrays of length > 2', () => {
    arr = [4,3,5,7,1];
  });
});

