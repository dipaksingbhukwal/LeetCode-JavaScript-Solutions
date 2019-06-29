/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(x, y) {
  while (y != 0) {
    var carry = x & y;

    x = x ^ y;

    y = carry << 1;
  }
  return x;
};

console.log(getSum(1, 2)); //Expected output = 3
console.log(getSum(-2, 3)); //Expected output = 1
