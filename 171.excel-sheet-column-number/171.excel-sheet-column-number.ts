/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let columnNumber = 0;
  const base = 26;

  for (let i = 0; i < columnTitle.length; i++) {
    const titleToNumber = columnTitle[i].charCodeAt(0) - 64;

    columnNumber += base ** (columnTitle.length - i - 1) * titleToNumber;
  }

  return columnNumber;
}
// @lc code=end
