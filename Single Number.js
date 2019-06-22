/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //   for (var i = 0; i < nums.length; i++) {
  //     var duplicateFound = false;
  //     for (var j = 0; j < nums.length; j++) {
  //       if (nums[i] === nums[j] && i != j) duplicateFound = true;
  //     }
  //     if (!duplicateFound) return nums[i];
  //   }

  nums.sort();
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] != nums[i + 1]) return nums[i];
  }
};

console.log(singleNumber([2, 2, 4, 1, 1]));
