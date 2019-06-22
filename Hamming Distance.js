/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let val = x ^ y;
  let distance = 0;

  // while (val > 0) {
  //   val &= val - 1;
  //   distance++;
  // }

  while (val > 0) {
    if (val & (1 == 1)) distance++;
    val = val >> 1;
  }

  return distance;
};
