/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  const k = Math.log(n) / Math.log(3);

  return Math.abs(k - Math.round(k)) < 1e-10;
}
// @lc code=end
