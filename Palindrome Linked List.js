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
var isPalindrome = function(head) {
  let hash = new Map();
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  console.log(arr);
  let i = 0;
  j = arr.length - 1;
  while (i < j) {
    if (arr[i] != arr[j]) return false;
    i++;
    j--;
  }
  return true;
};
