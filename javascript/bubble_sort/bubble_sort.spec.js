var bubbleSort = require('./bubble_sort.js');

describe('bubbleSort', () => {
  var arr,
    sorted;

  afterEach(() => {
    sorted = arr.slice().sort();
    expect(bubbleSort(arr)).toEqual(sorted);
  });

  it('sorts an arrray w/ 1 value', () => {
    arr = [1];
  });

  it('sorts an arrray w/ 2 value comparing values', () => {
    arr = [4, 2];
  });

  it('sorts an arrray w/ 3 value comparing values', () => {
    arr = [4, 2, 5];
  });

  it('sorts an arrray w/ multi value comparing values', () => {
    arr = [4, 2, 5, 6, 3, 7, 1, 8];
  });
});
