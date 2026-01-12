/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  const ans = Array(n + 1).fill(0);

  for (let i = 1; i < ans.length; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}
// @lc code=end
