/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
    return 0;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;

        continue;
      }

      if (i === m - 1 && j === n - 1) {
        obstacleGrid[i][j] = 1;

        continue;
      }

      const down = i + 1 < m ? obstacleGrid[i + 1][j] : 0;
      const right = j + 1 < n ? obstacleGrid[i][j + 1] : 0;

      obstacleGrid[i][j] = down + right;
    }
  }

  return obstacleGrid[0][0];
}
// @lc code=end
