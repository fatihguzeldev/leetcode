/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const n = nums.length;
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return ((n * (n + 1)) / 2) - sum;
};
// @lc code=end

