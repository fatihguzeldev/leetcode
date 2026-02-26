/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let p1 = 0
  let p2 = 0

  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  while (p1 < g.length && p2 < s.length) {
    if (g[p1] <= s[p2]) {
      p1++
    }

    p2++
  }

  return p1
};
// @lc code=end

