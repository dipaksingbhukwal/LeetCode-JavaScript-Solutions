/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // var dummy = new ListNode(-1);
  var dummy = { next: null };
  var tail = dummy;
  while (true) {
    var newNode = new ListNode(-1);
    if (!l1) {
      tail.next = l2;
      break;
    }
    if (!l2) {
      tail.next = l1;
      break;
    }
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    // console.log(tail);
    tail = tail.next;
    // console.log(tail);
  }
  console.log(dummy.next);

  return dummy.next;
};
