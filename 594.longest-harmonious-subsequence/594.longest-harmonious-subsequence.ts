/*
 * @lc app=leetcode id=594 lang=typescript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
function findLHS(nums: number[]): number {
  const freq = new Map<number, number>()

  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1)
  }

  let max = 0

  for (const key of freq.keys()) {
    const curr = freq.get(key)
    const pair = freq.get(key + 1) ?? 0

    let sum = 0

    if (pair !== 0) {
      sum = curr + pair
    }

    max = sum > max ? sum : max
  }

  return max
};
// @lc code=end

