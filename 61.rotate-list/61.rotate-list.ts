/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
 */

// @lc code=start

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0 || !head.next) {
    return head;
  }

  let length = 0;
  let current = head;

  while (current) {
    current = current.next;
    length++;
  }

  const shiftAmount = k % length;

  if (shiftAmount === 0) {
    return head;
  }

  let breakPoint = head;

  for (let i = 0; i < length - shiftAmount - 1; i++) {
    breakPoint = breakPoint.next;
  }

  const newHead = breakPoint.next;
  breakPoint.next = null;

  let bridge = newHead;

  while (bridge.next) {
    bridge = bridge.next;
  }

  bridge.next = head;

  return newHead;
}
// @lc code=end
