/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  //   for (var i = 0; i <= n / 2; i++) {
  //     if (Math.pow(2, i) === n) {
  //       return true;
  //     }
  //   }
  if (n == 1) return true;
  var i = 1;
  while (i <= n / 2) {
    i *= 2;
    if (i === n) return true;
  }

  return false;
};
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(268435455));
