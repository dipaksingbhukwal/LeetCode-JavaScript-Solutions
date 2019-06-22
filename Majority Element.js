/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //   var n = nums.length;
  //   var allNums = new Array(n);
  //   for (var i = 0; i < n; i++) {
  //     allNums[i] = 0;
  //   }

  //   for (var i = 0; i < n; i++) {
  //     allNums[nums[i] - 1] = !allNums[nums[i] - 1] ? 1 : allNums[nums[i] - 1] + 1;
  //   }

  //   var maxOccurance = Math.max(...allNums);
  //   if (maxOccurance > n / 2) return allNums.indexOf(maxOccurance) + 1;
  //   return [];

  let obj = {};
  let count = 0;
  let res;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    count = Math.max(obj[key], count);
    obj[key] == count ? (res = key) : 0;
  }
  return res;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([2, 1, 3]));
console.log(majorityElement([]));
console.log(majorityElement([2147487]));
