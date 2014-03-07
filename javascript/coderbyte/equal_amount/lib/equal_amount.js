exports.equalAmount = function(string) {
  // check whether string of x's & o's
  var xCount = 0;
  var oCount = 0;
  // if x count === o count
  string.split('').forEach(function(character) {
    if (character === 'x') {
      xCount++;
    } else {
      oCount++;
    };
  });
  
  if (xCount === oCount) {
    return 'true';
  } else {
    return 'false';
  };
}