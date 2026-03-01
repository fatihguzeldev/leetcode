/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let total = 0

  for (let i = 0; i < timeSeries.length; i++) {
    total += duration

    if (i > 0 && ((timeSeries[i - 1] + duration) > timeSeries[i])) {
      total -= duration - timeSeries[i] + timeSeries[i - 1] 
    }
  }

  return total
};
// @lc code=end

