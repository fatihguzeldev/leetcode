/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start 
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head)
  let reversePrev: ListNode | null = dummy
  let i = 1

  while (i < left) {
    reversePrev = reversePrev.next
    i++
  }

  let prev: ListNode | null = null
  let current: ListNode | null = reversePrev.next

  while (i <= right && current) {
    const next = current.next
    current.next = prev

    prev = current
    current = next
    i++
  }

  const tail = reversePrev.next
  reversePrev.next = prev
  
  if (tail) {
    tail.next = current
  }

  return dummy.next
};
// @lc code=end

