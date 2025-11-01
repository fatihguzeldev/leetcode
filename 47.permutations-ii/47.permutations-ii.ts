/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];

  const permute = (start: number) => {
    if (start === nums.length) {
      res.push([...nums]);

      return;
    }

    const set = new Set<number>();

    for (let i = start; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue;
      }

      set.add(nums[i]);

      [nums[start], nums[i]] = [nums[i], nums[start]];
      permute(start + 1);
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  };

  permute(0);

  return res;
}
// @lc code=end
