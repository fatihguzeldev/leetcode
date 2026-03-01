/*
 * @lc app=leetcode id=492 lang=typescript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
function constructRectangle(area: number): number[] {
  for (let w = Math.floor(Math.sqrt(area)); w > 0; w --) {
    if (area % w === 0) {
      return [area / w, w]
    }
  }
};
// @lc code=end

