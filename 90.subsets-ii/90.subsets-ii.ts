/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []
  nums.sort((a, b) => a - b)

  const backtrack = (path: number[], start: number) => {
    res.push([...path])

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }

      path.push(nums[i])
      backtrack(path, i + 1)
      path.pop()
    }
  }

  backtrack([], 0)

  return res
};
// @lc code=end

