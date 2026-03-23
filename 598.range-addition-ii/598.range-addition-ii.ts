/*
 * @lc app=leetcode id=598 lang=typescript
 *
 * [598] Range Addition II
 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0) return m * n

  let minRow = m
  let minCol = n

  for (const [a, b] of ops) {
    minRow = Math.min(minRow, a)
    minCol = Math.min(minCol, b)
  }

  return minRow * minCol
};
// @lc code=end

