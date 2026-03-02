/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = []
  const nextGreater = Array<number>(nums2.length).fill(-1)
  const res = Array(nums1.length).fill(-1)
  const map = new Map<number, number>()

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop()
    }

    if (stack.length > 0) {
      nextGreater[i] = stack[stack.length - 1]
    }

    stack.push(nums2[i])
  }


  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i)
  }


  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      res[map.get(nums2[i])] = nextGreater[i]
    }
  }

  return res
};
// @lc code=end

