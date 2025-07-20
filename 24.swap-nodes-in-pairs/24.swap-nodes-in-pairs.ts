/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);

  let current = dummy;

  while (current.next && current.next.next) {
    const first = current.next;
    const second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }

  return dummy.next;
}

export {};
// @lc code=end
