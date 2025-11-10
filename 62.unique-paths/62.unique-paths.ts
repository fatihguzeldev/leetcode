/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const factorial = (n: number) => {
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  };

  return Math.round(
    factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1))
  );
}
// @lc code=end
