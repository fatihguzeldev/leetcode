/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let l = 0;
  let r = num;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (mid * mid === num) {
      return true;
    }

    if (mid * mid > num) {
      r = mid - 1;
    }

    if (mid * mid < num) {
      l = mid + 1;
    }
  }

  return false;
}
// @lc code=end
