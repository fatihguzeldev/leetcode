/*
 * @lc app=leetcode id=566 lang=typescript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length
  const n = mat[0].length

  if (m * n !== r * c) {
    return mat
  }

  const reshaped = Array.from({ length: r }, () => Array(c).fill(0))

  let x = 0
  let y = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      reshaped[x][y] = mat[i][j]
      y++

      if (y === c) {
        y = 0
        x++
      }
    }
  }

  return reshaped
};
// @lc code=end

