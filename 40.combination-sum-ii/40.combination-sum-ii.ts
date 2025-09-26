/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (startIndex: number, path: number[], remaining: number) => {
    if (remaining === 0) {
      result.push([...path]);

      return;
    }

    if (remaining < 0) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] > remaining) {
        break;
      }

      path.push(candidates[i]);
      backtrack(i + 1, path, remaining - candidates[i]);
      path.pop();
    }
  };

  backtrack(0, [], target);

  return result;
}
// @lc code=end
