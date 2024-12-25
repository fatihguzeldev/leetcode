/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const zigzagRows = Array.from({ length: numRows }, () => []);
  let rowIndex = 0;
  let direction = 1;

  for (const char of s) {
    zigzagRows[rowIndex].push(char);

    rowIndex += direction;

    if (rowIndex === 0 || rowIndex + 1 === numRows) {
      direction *= -1;
    }
  }

  return zigzagRows.flat().join("");
}
// @lc code=end
