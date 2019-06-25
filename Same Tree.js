/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true; //if both p and q are null, i.e., leaf/root is null, return true
  if (!p || !q) return false;
  //if any of the side is null, return false
  else if (p.val !== q.val) return false;
  //if both values do not match, return false
  else {
    // make a recursive call for both left and right child of current root node
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
