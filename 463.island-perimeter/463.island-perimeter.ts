/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
  let n = grid.length
  let m = grid[0].length
  let perimeter = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4

        // right
        if (j < m - 1 && grid[i][j + 1] === 1) {
          perimeter -= 2
        }

        // bottom
        if (i < n - 1 && grid[i + 1][j] === 1) {
          perimeter -= 2
        }
      }
    }
  }

  return perimeter
};
// @lc code=end

