/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowZero = false;
  let firstColumnZero = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColumnZero = true;

      break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      firstRowZero = true;

      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstColumnZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}
// @lc code=end
