/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const swap = (l: number, r: number, nums: number[]) => {
    const tmp = nums[l]
    nums[l] = nums[r]
    nums[r] = tmp
  }

  let l = 0
  let i = 0
  let r = nums.length - 1

  while (i <= r) {
    if (nums[i] === 0) {
      swap(l, i, nums)
      l++
      i++

      continue
    }

    if (nums[i] === 1) {
      i++

      continue
    }

    if (nums[i] === 2) {
      swap(i, r, nums)
      r--

      continue
    }
  }
};
// @lc code=end

