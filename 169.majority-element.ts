/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== candidate) {
      count--;

      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }

      continue;
    }

    count++;
  }

  return candidate;
}
// @lc code=end
