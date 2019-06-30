/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var arr = [];
  var hash = new Map();

  for (n in nums1) {
    if (!hash[nums1[n]]) hash[nums1[n]] = 1;
    else hash[nums1[n]] += 1;
  }

  for (n in nums2) {
    if (hash[nums2[n]] > 0) {
      arr.push(nums2[n]);
      hash[nums2[n]] -= 1;
    }
  }

  return arr;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Expected output [9,4]
console.log(intersect([2, 1], [1, 2])); //Expected output [1,2]
console.log(intersect([0], [0])); // Expected output [0]
