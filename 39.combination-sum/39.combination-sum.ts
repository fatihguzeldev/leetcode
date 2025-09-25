/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const backtrack = (startIndex: number, path: number[], remaining: number) => {
    if (remaining === 0) {
      result.push([...path]);

      return;
    }

    if (remaining < 0) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, remaining - candidates[i]);
      path.pop();
    }
  };

  backtrack(0, [], target);

  return result;
}
// @lc code=end
