/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  const newRow = [1];
  const result = generate(numRows - 1);
  const lastRow = result[result.length - 1];

  for (let i = 0; i < numRows - 2; i++) {
    newRow.push(lastRow[i] + lastRow[i + 1]);
  }

  newRow.push(1);
  result.push(newRow);

  return result;
}
// @lc code=end
