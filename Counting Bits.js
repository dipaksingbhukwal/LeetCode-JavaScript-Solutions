/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var counter = [];
  for (var i = 0; i <= num; i++) {
    counter.push(bitCount(i));
  }
  return counter;
};

var bitCount = function(i) {
  return i
    .toString(2)
    .split("")
    .filter(e => e == 1).length;
};
console.log(countBits(6));
