/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  let length = 0;
  let currentNode: ListNode | null = head;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  const indexNth = length - n;
  let dummy = new ListNode(0, head);
  let current: ListNode | null = dummy;

  for (let i = 0; i < length + 1; i++) {
    if (i !== indexNth) {
      current = current.next;
      continue;
    }

    current.next = current.next.next;
    break;
  }

  return dummy.next;
}
// @lc code=end
