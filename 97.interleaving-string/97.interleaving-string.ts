/*
 * @lc app=leetcode id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false

  const memo = new Map<string, boolean>()

  const dfs = (i: number, j: number) => {
    if (i + j === s3.length) {
      return true
    }
    
    if (s1[i] !== s3[i + j] && s2[j] !== s3[i + j]) {
      return false
    }

    const key = `${i}-${j}`

    if (memo.has(key)) return memo.get(key)

    let res = false

    if (s1[i] === s3[i + j]) {
      res = dfs(i + 1, j)
    }

    if (!res && s2[j] === s3[i + j]) {
      res = dfs(i, j + 1)
    }

    memo.set(key, res)
    return res
  }

  return dfs(0, 0)
};
// @lc code=end

