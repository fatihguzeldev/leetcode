/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const prev = seen.get(nums[i]);

    if (prev !== undefined && i - prev <= k) {
      return true;
    }

    seen.set(nums[i], i);
  }

  return false;
}
// @lc code=end
