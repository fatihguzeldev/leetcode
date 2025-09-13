/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleSquared = middle * middle;

    if (middleSquared === x) {
      return middle;
    }

    if (middleSquared < x) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}
// @lc code=end
