/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //   var index,
  //     i = 0;
  //   for (i = 0; i < nums.length - 1; i++) {
  //     for (j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) return [i, j];
  //     }
  //   }
  //   return [];

  let map = {};
  let thisNum;
  for (let i = 0; i < nums.length; i++) {
    thisNum = nums[i];
    const result = target - thisNum;
    if (result in map) {
      return [map[result], i];
    }
    map[thisNum] = i;
  }
  return null;
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([4, 8, 13, 2, 7, 11, 15], 9));
