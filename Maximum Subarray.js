/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0];

  var sum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    sum = nums[i] > sum + nums[i] ? nums[i] : nums[i] + sum;
    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2]));
