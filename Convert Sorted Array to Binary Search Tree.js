/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums) {
    return null;
  }
  return BST(nums, 0, nums.length - 1);
};

var BST = function(nums, start, end) {
  if (start > end) return null;

  var mid = Math.floor(start + (end - start) / 2);
  var node = new TreeNode(nums[mid]);

  node.left = BST(nums, start, mid - 1);
  node.right = BST(nums, mid + 1, end);

  return node;
};
