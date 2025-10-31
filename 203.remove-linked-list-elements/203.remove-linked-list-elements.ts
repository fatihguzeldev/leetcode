/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy: ListNode = new ListNode(0, head);
  let current: ListNode | null = dummy.next;
  let prevNode: ListNode | null = dummy;

  while (current) {
    if (current.val === val) {
      prevNode.next = current.next;
      current = current.next;

      continue;
    }

    prevNode = current;
    current = current.next;
  }

  return dummy.next;
}
// @lc code=end
