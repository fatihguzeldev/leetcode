/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
  let left = 1
  let right = n
  let answer = 0

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const total = (mid * (mid + 1)) / 2

    if (total <= n) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer
};
// @lc code=end
