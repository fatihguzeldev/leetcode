/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const columns = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const cell = board[row][column];

      if (cell !== ".") {
        if (rows[row].has(cell)) {
          return false;
        }

        rows[row].add(cell);

        if (columns[column].has(cell)) {
          return false;
        }

        columns[column].add(cell);

        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);

        if (boxes[boxIndex].has(cell)) {
          return false;
        }

        boxes[boxIndex].add(cell);
      }
    }
  }

  return true;
}
// @lc code=end
