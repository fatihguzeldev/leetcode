/*
 * @lc app=leetcode id=89 lang=typescript
 *
 * [89] Gray Code
 */

// @lc code=start
function grayCode(n: number): number[] {
  const res: number[] = []
  const size = 1 << n

  for (let i = 0; i < size ; i++) {
    res.push(i ^ (i >> 1))
  }

  return res
};
// @lc code=end

