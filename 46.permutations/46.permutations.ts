/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtrack = (path: number[], used: boolean[]) => {
    if (path.length === nums.length) {
      res.push([...path]);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      used[i] = true;

      path.push(nums[i]);
      backtrack(path, used);
      path.pop();

      used[i] = false;
    }
  };

  backtrack([], new Array(nums.length).fill(false));

  return res;
}
// @lc code=end
