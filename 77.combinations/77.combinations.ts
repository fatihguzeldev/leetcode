/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = []

  const backtrack = (path: number[], idx: number) => {
    if (path.length === k) {
      res.push([...path])

      return
    }

    for (let i = idx; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backtrack(path, i + 1)
      path.pop()
    }
  }

  backtrack([], 1)

  return res
};
// @lc code=end

