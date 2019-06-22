/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length;
  for (var i = 0; i < length; i++) {
    if (nums[i] === 0) {
      var j,
        temp = nums[i];

      for (j = i; j < length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums[j] = temp;
      length--;
      if (nums[i] === 0) i--;
    }
  }
  return nums;

  //     let length = nums.length;
  //     let i = 0;
  //     while(i < length){
  //         if(nums[i] === 0){
  //            nums.push(0);
  //            nums.splice(i,1);
  //             i--;
  //             length--;
  //          }
  //         i++;
  //     }

  //     return nums;
};

console.log(moveZeroes([0, 1, 0, 0, 3, 0, 0, 12]));
