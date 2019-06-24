/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  //   Using extra variable hash
  //
  //   var hash = new Map();
  //   for (var i = 0; i < nums.length; i++) {
  //     hash.set(nums[i]);
  //   }
  //   for (var i = 0; i <= nums.length; i++) {
  //     if (!hash.has(i)) return i;
  //   }
  //   return -1;
  var sum = 0;
  nums.forEach(element => {
    sum += element;
  });

  var n = nums.length + 1;
  return (n * (n - 1)) / 2 - sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([0]));
