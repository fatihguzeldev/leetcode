/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  let duplicate = -1
  let missing = -1

  for (const n of nums) {
    const idx = Math.abs(n) - 1

    if (nums[idx] < 0) {
      duplicate = idx + 1
    } else {
      nums[idx] *= -1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1
    }
  }

  return [duplicate, missing]
};
// @lc code=end

