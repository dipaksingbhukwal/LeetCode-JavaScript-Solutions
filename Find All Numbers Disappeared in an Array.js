/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//   nums.sort();
//   var missingNumbers = [];
//   var diff;
//   for (var i = nums.length - 1; i > 0; i--) {
//     diff = nums[i] - nums[i - 1];
//     if (diff > 1) {
//       for (j = diff - 1; j > 0; j--) {
//         // console.log(nums[i]-j);
//         missingNumbers.push(nums[i] - j);
//       }
//     }
//   }
//   missingNumbers.sort();
//   return missingNumbers;
// };
var findDisappearedNumbers = function(nums) {
  nums.sort();
  var missingNumbers = [];
  var max = Math.max(...nums) > nums.length ? Math.max(...nums) : nums.length;

  for (var i = 1; i <= max; i++) if (!nums.includes(i)) missingNumbers.push(i);

  //   let n = nums.length;
  //   let allNums = new Array(n);

  //   for (let i = 0; i < n; i++) {
  //     allNums[nums[i] - 1] = 1;
  //   }

  //   let missingNumbers = [];

  //   for (let i = 0; i < n; i++) {
  //     if (!allNums[i]) {
  //       missingNumbers.push(i + 1);
  //     }
  //   }

  return missingNumbers;
};

console.log(findDisappearedNumbers([1, 1]));
