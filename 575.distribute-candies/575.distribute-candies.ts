/*
 * @lc app=leetcode id=575 lang=typescript
 *
 * [575] Distribute Candies
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
  const candies = new Set(candyType)

  return Math.min(candies.size, candyType.length / 2)
};
// @lc code=end

