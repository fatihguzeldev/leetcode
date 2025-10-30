/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  let result = 0;

  while (n > 0) {
    n &= n - 1;

    result++;
  }

  return result;
}
// @lc code=end
