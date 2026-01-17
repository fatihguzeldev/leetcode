/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  let freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
