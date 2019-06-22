/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var sum = 0;

  function reverseInorder(root) {
    if (!root) return;
    reverseInorder(root.right);
    sum += root.val;
    root.val = sum;
    reverseInorder(root.left);
  }

  reverseInorder(root);

  return root;
};
