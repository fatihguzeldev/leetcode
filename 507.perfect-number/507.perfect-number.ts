/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
  let divisors = 0

  if (num % 2 === 1) {
    return false
  }

  for (let i = 1; i <= Math.floor(num / 2); i++ ) {
    if (num % i === 0) {
      divisors += i
    }
  }

  return num === divisors
};
// @lc code=end

