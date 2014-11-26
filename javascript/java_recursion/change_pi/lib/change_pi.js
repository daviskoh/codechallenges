// Given a string, compute recursively (no loops)
// a new string where all appearances of "pi" have been replaced by "3.14". 

function changePi(string) {
  // check index of 'pi'
  // if not exist, return string
  // base case
  if (string.indexOf('pi') === -1) {
    return string;
  } else {
    // if exist, replace string w/ '3.14'
      // & call changePi w/ new string
    return string.substring(0, string.indexOf('pi')) + '3.14'
    + changePi(string.substring(string.indexOf('pi') + 2));
  }
}

module.exports = changePi;