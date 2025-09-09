/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let length = 0;
  let index = s.length - 1;

  while (index >= 0 && s[index] == " ") {
    index--;
  }

  while (index >= 0 && s[index] !== " ") {
    length++;
    index--;
  }

  return length;
}
// @lc code=end
