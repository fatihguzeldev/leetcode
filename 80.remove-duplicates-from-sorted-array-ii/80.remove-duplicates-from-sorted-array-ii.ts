/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let uniqueIndex = 0
  let atMost = 2

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      uniqueIndex++
    }

    if (i !== 0 && nums[i] !== nums[i - 1]) {
      atMost = 2
      nums[uniqueIndex] = nums[i]
      uniqueIndex++
    } else if (i !== 0 && nums[i] === nums[i - 1] && atMost > 0) {
      nums[uniqueIndex] = nums[i]
      uniqueIndex++
    }

    atMost--
  }

  return uniqueIndex
};
// @lc code=end

