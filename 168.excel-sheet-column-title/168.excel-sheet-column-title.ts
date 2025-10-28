/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  const base = 26;

  while (columnNumber > 0) {
    const letter = (columnNumber - 1) % base;
    result = alphabet[letter] + result;
    columnNumber = Math.floor((columnNumber - 1) / base);
  }

  return result;
}
// @lc code=end
