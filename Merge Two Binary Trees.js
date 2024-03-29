/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  // Runtime 84ms
  // if(t1 != null && t2 != null){
  //     t1.val += t2.val;
  //     t1.left = mergeTrees(t1.left, t2.left);
  //     t1.right = mergeTrees(t1.right, t2.right);
  //     return t1;
  //     }
  // return t1 == null ? t2:t1;

  // Runtime 68ms
  if (t1 == null || t2 == null) return t1 != null ? t1 : t2;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
