/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  for (const factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n /= factor;
    }
  }

  return n === 1;
};
// @lc code=end

