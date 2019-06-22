/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  var queue = [];

  queue.push(root);
  queue.push(root);

  while (queue.length !== 0) {
    leftNode = queue.shift();
    rightNode = queue.shift();

    if (!leftNode && !rightNode) continue;
    if (!leftNode || !rightNode) return false;

    if (leftNode.val != rightNode.val) return false;

    queue.push(leftNode.left);
    queue.push(rightNode.right);
    queue.push(leftNode.right);
    queue.push(rightNode.left);
  }
  return true;
};
