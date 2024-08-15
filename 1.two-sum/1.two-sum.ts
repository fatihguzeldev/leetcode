/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | undefined {
  const indicies = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];

    if (indicies.has(pair)) {
      return [indicies.get(pair)!, i];
    }

    indicies.set(nums[i], i);
  }
}

// @lc code=end
