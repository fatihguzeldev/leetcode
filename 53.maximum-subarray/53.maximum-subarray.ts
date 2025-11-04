/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let currentSum = -Infinity;
  let maxSum = -Infinity;

  for (const num of nums) {
    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
// @lc code=end
