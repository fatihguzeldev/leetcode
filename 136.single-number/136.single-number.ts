/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }

  return res;
}
// @lc code=end
