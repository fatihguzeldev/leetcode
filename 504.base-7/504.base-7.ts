/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
  if (num === 0) {
    return '0'
  }

  let isNegative = num < 0
  let res: number[] = []
  num = Math.abs(num)

  while (num > 0) {
    res.push(num % 7)
    num = Math.floor(num / 7)
  }

  return isNegative ? '-' + res.reverse().join('') : res.reverse().join('')
};
// @lc code=end

