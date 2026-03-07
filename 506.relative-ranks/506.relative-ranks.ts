/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const n = score.length
  const res = Array<string>(n).fill('')
  const lookup = new Map<number,number>()

  for (let i = 0; i < n; i++) {
    lookup.set(score[i], i)
  }

  score.sort((a, b) => b - a)
  console.log(score)

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res[lookup.get(score[i])] = 'Gold Medal'

      continue
    }

    if (i === 1) {
      res[lookup.get(score[i])] = 'Silver Medal'

      continue
    }

    if (i === 2) {
      res[lookup.get(score[i])] = 'Bronze Medal'

      continue
    }

    res[lookup.get(score[i])] = (i + 1).toString()
  }

  return res
};
// @lc code=end

