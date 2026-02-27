/*
 * @lc app=leetcode id=461 lang=typescript
 *
 * [461] Hamming Distance
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  let count = x ^ y
  let res = 0

  while (count > 0) {
    res += count & 1
    count >>= 1
  }

  return res
};
// @lc code=end

