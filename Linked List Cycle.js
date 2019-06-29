/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  var p1 = head,
    p2 = head.next;
  while (p2 && p2.next && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1 === p2;
};
