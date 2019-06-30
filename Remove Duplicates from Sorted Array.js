/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var current = 1;
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    nums[current] = nums[i + 1];
    current++;
  }
  nums = nums.slice(0, current);

  return current;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
