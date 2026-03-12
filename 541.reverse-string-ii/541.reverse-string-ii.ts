/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const str = s.split('')
  const n = s.length

  const reverse = (start: number, end: number) => {
    let l = start
    let r = end - 1

    while (l < r) {
      const tmp = str[l]
      str[l] = str[r]
      str[r] = tmp

      l++
      r--
    }
  }

  let start = 0

  while (start < n) {
    reverse(start, Math.min(start + k, n))
    start += 2 * k
  }

  return str.join('')
};
// @lc code=end

