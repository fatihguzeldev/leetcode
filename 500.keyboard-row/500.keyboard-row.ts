/*
 * @lc app=leetcode id=500 lang=typescript
 *
 * [500] Keyboard Row
 */

// @lc code=start
function findWords(words: string[]): string[] {
  const lookup = new Map<string, number>([
    ["q", 1],
    ["w", 1],
    ["e", 1],
    ["r", 1],
    ["t", 1],
    ["y", 1],
    ["u", 1],
    ["i", 1],
    ["o", 1],
    ["p", 1],
    ["a", 2],
    ["s", 2],
    ["d", 2],
    ["f", 2],
    ["g", 2],
    ["h", 2],
    ["j", 2],
    ["k", 2],
    ["l", 2],
    ["z", 3],
    ["x", 3],
    ["c", 3],
    ["v", 3],
    ["b", 3],
    ["n", 3],
    ["m", 3]
  ])

  const res: string[] = []

  for (const w of words) {
    let row = 0
    let diff = false

    for (const c of w) {
      if (row !== 0 && row !== lookup.get(c.toLowerCase())) {
        diff = true

        break
      }

      row = lookup.get(c.toLowerCase())
    }

    if (!diff) {
      res.push(w)
    }
  }

  return res
};
// @lc code=end

