/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0, null);
  let index = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      index.next = list2;
      list2 = list2.next;
    } else {
      index.next = list1;
      list1 = list1.next;
    }

    index = index.next;
  }

  index.next = list1 ? list1 : list2;

  return dummy.next;
}

export {};
// @lc code=end
