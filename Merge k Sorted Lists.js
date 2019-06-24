/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists) return null;
  var amount = lists.length,
    pace = 1;

  while (pace < amount) {
    for (var i = 0; i < amount - pace; i += pace * 2) {
      lists[i] = merge(lists[i], lists[i + pace]);
    }
    pace *= 2;
  }
  return lists[0];
};
var merge = function(l1, l2) {
  var dummy = new ListNode(0);
  var cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;

  return dummy.next;
};
