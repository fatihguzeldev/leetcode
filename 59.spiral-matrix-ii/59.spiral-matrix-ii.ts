/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let idx = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res[top][i] = idx++;
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      res[j][right] = idx++;
    }
    right--;

    if (top <= bottom) {
      for (let k = right; k >= left; k--) {
        res[bottom][k] = idx++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let l = bottom; l >= top; l--) {
        res[l][left] = idx++;
      }
      left++;
    }
  }

  return res;
}
// @lc code=end
