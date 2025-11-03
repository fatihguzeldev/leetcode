/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    for (let i = layer; i < n - layer - 1; i++) {
      let x = layer;
      let y = i;
      let changeVal = matrix[x][y];

      for (let j = 0; j < 4; j++) {
        const xNext = y;
        const yNext = n - x - 1;

        const temp = matrix[xNext][yNext];
        matrix[xNext][yNext] = changeVal;
        changeVal = temp;

        x = xNext;
        y = yNext;
      }
    }
  }
}
// @lc code=end
