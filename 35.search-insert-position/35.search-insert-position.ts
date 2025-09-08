/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      low = mid + 1;
    }

    if (target < nums[mid]) {
      high = mid - 1;
    }
  }

  return low;
}
// @lc code=end
