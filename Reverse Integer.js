/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // One line solution
  // return (parseInt(x.toString().split('').reverse().join(''))*n);

  signFlag = x < 0 ? -1 : 1; // Flag to keep the sign value of x
  x = Math.abs(x);
  var reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // Check if reverse value exceeds 32-bit signed integer range: [−2^31,  2^31 − 1]
  if (
    reverse * signFlag < Math.pow(2, 31) * -1 ||
    reverse * signFlag > Math.pow(2, 31) - 1
  )
    return 0;

  return reverse * signFlag;
};
