/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  const arr = s.split('')
  let start = 0

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      let l = start
      let r = i - 1

      while (l < r) {
        const tmp = arr[l]
        arr[l] = arr[r]
        arr[r] = tmp

        l++
        r--
      }

      start = i + 1
    }
  }

  return arr.join('')
};
// @lc code=end

