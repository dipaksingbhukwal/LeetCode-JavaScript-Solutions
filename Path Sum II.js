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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var path = [];
  findPath(root, sum, [], path);
  return path;
};

var findPath = function(root, sum, current, path) {
  if (root === null) return;
  current.push(root.val);
  if (root.val === sum && root.left === null && root.right === null) {
    path.push(current);
    // console.log(current);
    return;
  }
  findPath(root.left, sum - root.val, [...current], path);
  findPath(root.right, sum - root.val, [...current], path);
};
