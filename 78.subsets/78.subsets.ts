/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = []

  const backtrack = (path: number[], start: number) => {
    res.push([...path])

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(path, i + 1)
      path.pop()
    }
  }

  backtrack([], 0)

  return res
};
// @lc code=end

