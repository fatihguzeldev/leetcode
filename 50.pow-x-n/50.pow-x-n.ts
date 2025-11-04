/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  const half = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  }

  return half * half * x;
}
// @lc code=end
