/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      res.push(matrix[j][right]);
    }
    right--;

    if (bottom >= top) {
      for (let k = right; k >= left; k--) {
        res.push(matrix[bottom][k]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let l = bottom; l >= top; l--) {
        res.push(matrix[l][left]);
      }
      left++;
    }
  }

  return res;
}
// @lc code=end
