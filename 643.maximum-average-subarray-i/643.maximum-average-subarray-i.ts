/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let max = -Infinity
  let sum = 0

  for (let i = 0; i < k; i ++) {
    sum += nums[i]
  }

  max = sum / k
  
  for (let i = 1; i <= nums.length - k; i++) {
    sum += nums[i + k - 1] - nums[i - 1]
    const avg = sum / k

    max = avg > max ? avg : max
  }

  return max
};
// @lc code=end

