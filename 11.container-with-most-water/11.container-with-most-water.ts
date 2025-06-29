/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (right > left) {
    const newArea = (right - left) * Math.min(height[left], height[right]);

    if (newArea > maxArea) {
      maxArea = newArea;
    }

    height[left] > height[right] ? right-- : left++;
  }

  return maxArea;
}
// @lc code=end
