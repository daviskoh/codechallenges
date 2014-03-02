module.exports = function(string) {
  console.log(string.split(''));
  console.log(string.split('').reverse());
  return string.split('').reverse().join('');
}