/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let reach = 0;

  for (let i = 0; i <= reach; i++) {
    reach = Math.max(reach, i + nums[i]);

    if (reach >= nums.length - 1) {
      return true;
    }
  }

  return false;
}
// @lc code=end
