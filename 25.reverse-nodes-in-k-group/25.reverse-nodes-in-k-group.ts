/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 1) return head;

  const getKthNode = (current: ListNode | null, k: number): ListNode | null => {
    while (current && k > 0) {
      current = current.next;

      k--;
    }

    return current;
  };

  const reverseGroup = (start: ListNode, end: ListNode) => {
    let prev: ListNode | null = end.next;
    let current: ListNode | null = start;
    const endNext = end.next;

    while (current !== endNext) {
      const nextTemp: ListNode | null = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
  };

  let dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    const kth = getKthNode(groupPrev, k);

    if (!kth) {
      break;
    }

    const groupStart = groupPrev.next;

    reverseGroup(groupStart, kth);

    groupPrev.next = kth;

    groupPrev = groupStart;
  }

  return dummy.next;
}

export {};
// @lc code=end
