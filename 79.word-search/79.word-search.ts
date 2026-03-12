/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  const visited = Array.from({ length: m }, () => Array<boolean>(n).fill(false))

  const dfs = (i: number, j: number, index: number) => {
    if (board[i][j] !== word[index]) {
      return false
    }

    if (index === word.length - 1) {
      return true
    }

    visited[i][j] = true

    // left
    if (j > 0 && !visited[i][j - 1] && dfs(i, j - 1, index + 1)) {
      return true
    }

    // right
    if (j < n - 1 && !visited[i][j + 1] && dfs(i, j + 1, index + 1) ) {
      return true
    }

    // down
    if (i < m - 1 && !visited[i + 1][j] && dfs(i + 1, j, index + 1)) {
      return true
    }

    // up
    if (i > 0 && !visited[i - 1][j] && dfs(i - 1, j, index + 1)) {
      return true
    }

    visited[i][j] = false

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
};
// @lc code=end

