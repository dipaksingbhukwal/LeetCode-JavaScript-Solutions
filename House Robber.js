/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums == null || nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  var dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (var i = 2; i < nums.length; i++)
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  return dp[dp.length - 1];
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 1]));
console.log(rob([2, 1]));
console.log(rob([1, 2]));
console.log(rob([4, 1, 1, 4]));
