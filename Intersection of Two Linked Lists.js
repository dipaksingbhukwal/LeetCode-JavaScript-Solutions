/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let l1 = listLength(headA),
    l2 = listLength(headB);
  let d = Math.abs(l1 - l2);
  let count = 0,
    intersection = null;
  while (count < d) {
    l1 > l2 ? (headA = headA.next) : (headB = headB.next);
    count++;
  }
  while (headA) {
    if (headA == headB) {
      intersection = headA;
      break;
    }
    headA = headA.next;
    headB = headB.next;
  }
  console.log(intersection);
  return intersection;
};

var listLength = function(node) {
  let count = 0;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
};
