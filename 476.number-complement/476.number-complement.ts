/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
  const numLen = num.toString(2).length

  return num ^ ((1 << numLen) - 1)
};
// @lc code=end

