/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
  let plus1 = 1
  let plus2 = 0

  for (let i = s.length - 1; i >= 0; i--) {
    let sum = 0

    if (s[i] !== '0') {
      sum += plus1

      if (i !== s.length - 1 && +(s[i] + s[i + 1]) <= 26) {
        sum += plus2
      }
    }

    plus2 = plus1
    plus1 = sum
  }

  return plus1
};
// @lc code=end

