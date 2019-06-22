/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var path = 0;
var pathSum = function(root, sum) {
  if (!root) return path;

  calPath(root, sum);
  if (root.left) pathSum(root.left, sum);
  if (root.right) pathSum(root.right, sum);
  console.log(path);

  return path;
};

var calPath = function(root, sum) {
  if (!root) return;

  if (root.val === sum) {
    path += 1;
    return;
  }
  if (root.left) calPath(root.left, sum - root.val);
  if (root.right) calPath(root.right, sum - root.val);
};
