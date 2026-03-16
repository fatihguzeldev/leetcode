/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (nums[m] === target) {
      return true
    } else if (nums[l] === nums[m] && nums[m] === nums[r]) {
      l++
      r--
    } else if (nums[l] <= nums[m]) {
      // left sorted
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      // right sorted
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }

  return false
};
// @lc code=end

