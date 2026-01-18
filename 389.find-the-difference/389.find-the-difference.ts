/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  let charCode = 0;

  for (let i = 0; i < s.length; i++) {
    charCode ^= s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    charCode ^= t.charCodeAt(i);
  }

  return String.fromCharCode(charCode);
}
// @lc code=end
