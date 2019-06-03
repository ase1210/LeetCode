/* 
23. Merge k Sorted Lists
Hard

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
Accepted
392,131
Submissions
1,135,253
*/

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  let values = [];
  lists.forEach(list => {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  });
  if (values.length === 0) return null;
  values.sort((a, b) => a - b);
  let head = new ListNode(values.shift());
  let node = head;
  while (values.length > 0) {
    node.next = new ListNode(values.shift());
    node = node.next;
  }
  return head;
};
