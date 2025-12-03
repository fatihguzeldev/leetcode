/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
  if (head.next === null || head === null) {
    return true;
  }

  const reverse = (head: ListNode | null) => {
    if (!head) {
      return null;
    }

    let prev: ListNode | null = null;
    let curr: ListNode = head;

    while (curr) {
      const next: ListNode | null = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head1 = head;
  let head2 = reverse(slow);

  while (head1 && head2) {
    if (head1.val !== head2.val) {
      return false;
    }

    head1 = head1.next;
    head2 = head2.next;
  }

  return true;
}
// @lc code=end
