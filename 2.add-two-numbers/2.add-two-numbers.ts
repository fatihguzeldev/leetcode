/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 **/
class LinkedList {
  val: number;
  next: LinkedList | null;
  constructor(val?: number, next?: LinkedList | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: LinkedList | null,
  l2: LinkedList | null
): LinkedList | null {
  const dummyHead = new LinkedList();
  let current = dummyHead;
  let remainder = 0;

  let currentNodeL1: LinkedList | null = l1;
  let currentNodeL2: LinkedList | null = l2;

  while (currentNodeL1 || currentNodeL2 || remainder) {
    let digitSum = 0;

    if (remainder !== 0) {
      digitSum += 1;
      remainder = 0;
    }

    if (currentNodeL1) {
      digitSum += currentNodeL1.val;
      currentNodeL1 = currentNodeL1.next;
    }

    if (currentNodeL2) {
      digitSum += currentNodeL2.val;
      currentNodeL2 = currentNodeL2.next;
    }

    if (digitSum > 9) {
      remainder = Math.floor(digitSum / 10);
      digitSum = digitSum % 10;
    }

    current.val = digitSum;

    if (currentNodeL1 || currentNodeL2 || remainder) {
      current.next = new LinkedList();

      current = current.next;
    }
  }

  return dummyHead;
}
// @lc code=end
