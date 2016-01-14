function sort(arr) {
  if (arr.length === 1) return arr;

  var indexAtHalf = arr.length / 2;
  var left = arr.slice(0, indexAtHalf);
  var right = arr.slice(indexAtHalf, arr.length);

  return recMerge(sort(left), sort(right));
}

function merge(arr1, arr2) {
  var result = [];

  while (arr1.length || arr2.length) {
    result.push(
      arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()
    );
  }

  return result;
}

function recMerge(arr1, arr2) {
  var left = arr1[0],
    right = arr2[0];

  if (!left) return arr2;
  if (!right) return arr1;

  if (left < right) {
    return [left].concat(recMerge(
      arr1.slice(1),
      arr2
    ));
  } else {
    return [right].concat(recMerge(
      arr2.slice(1),
      arr1
    ));
  }
}

module.exports = sort;
