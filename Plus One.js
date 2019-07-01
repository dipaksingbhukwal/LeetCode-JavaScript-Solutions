/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var l = digits.length;
  for (var i = l - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // if all values in array are '9', new array with length+1 is returned
  var result = new Array(l + 1);
  result[0] = 1;
  for (var i = 1; i < result.length; i++) result[i] = 0;
  return result;
};

console.log(plusOne([1, 2, 3])); // Expected result [ 1, 2, 4 ]
console.log(plusOne([4, 3, 2, 1])); // Expected result [4,3,2,2]
console.log(plusOne([9, 9, 9])); // Expected result [ 1, 0, 0, 0 ]
