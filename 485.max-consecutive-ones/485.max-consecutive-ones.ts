/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let curr = 0

  for (const num of nums) {
    if (num === 1) {
      curr ++

      if (curr > max) {
        max = curr
      }
    } else {
      curr = 0
    }
  }

  return max
};
// @lc code=end

