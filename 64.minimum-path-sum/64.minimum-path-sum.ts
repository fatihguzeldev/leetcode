/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      const top = i > 0 ? grid[i - 1][j] : Infinity;
      const left = j > 0 ? grid[i][j - 1] : Infinity;

      grid[i][j] += Math.min(top, left);
    }
  }

  return grid[rows - 1][columns - 1];
}
// @lc code=end
