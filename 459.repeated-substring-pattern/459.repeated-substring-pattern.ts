/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const n = s.length
  const lps = Array(n).fill(0)
  let len = 0
  let i = 1

  while (i < n) {
    if (s[i] === s[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len !== 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }

  return lps[n - 1] !== 0 && n % (n - lps[n - 1]) === 0
};
// @lc code=end

