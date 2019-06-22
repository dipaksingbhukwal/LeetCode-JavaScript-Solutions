/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;

  var lHeight = height(root.left);
  var rHeight = height(root.right);

  var lDiameter = diameterOfBinaryTree(root.left);
  var rDiameter = diameterOfBinaryTree(root.right);

  return Math.max(lHeight + rHeight + 1, Math.max(lDiameter, rDiameter));
};

var height = function(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
};
