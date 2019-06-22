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
var maxDepth = function(root) {
  // Using recursion
  // if(root === null) return 0;
  // var leftDepth = maxDepth(root.left);
  // var rightDepth = maxDepth(root.right);
  // return Math.max(leftDepth, rightDepth)+1;

  if (root === null) return 0;

  var result = [];
  var queue = [];
  queue.push(root);

  while (queue.length) {
    var length = queue.length;
    var temp = [];

    for (var i = 0; i < length; i++) {
      var node = queue.shift();
      if (node) {
        temp.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    result.push(temp);
  }
  return result.length;
};
