/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1
    
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }

  return res
};
// @lc code=end

