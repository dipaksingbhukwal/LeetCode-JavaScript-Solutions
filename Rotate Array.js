/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // One line solution
  for (var i = 0; i < k; i++) nums.unshift(nums.pop());

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4));
