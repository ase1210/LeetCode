/* 
2. Add Two Numbers
Medium

5114

1299

Favorite

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
Accepted
862,910
Submissions
2,777,797
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let overflow = false;

  let result = new ListNode(0);
  let node = result;
  let prevNode;
  while (l1 || l2) {
    let sum = 0;
    if (l1 !== null) sum += l1.val;
    if (l2 !== null) sum += l2.val;
    if (overflow) {
      sum++;
      overflow = false;
    }
    if (sum > 9) {
      overflow = true;
      sum %= 10;
    }
    node.val = sum;
    prevNode = node;
    node = new ListNode(0);
    prevNode.next = node;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  prevNode.next = null;
  if (overflow) prevNode.next = new ListNode(1);

  return result;
};
