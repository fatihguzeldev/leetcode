/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];

  if (nums.length === 0) {
    return res;
  }

  let start = nums[0];
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    if (current !== prev + 1) {
      res.push(start === prev ? `${start}` : `${start}->${prev}`);
      start = current;
    }

    prev = current;
  }

  res.push(start === prev ? `${start}` : `${start}->${prev}`);

  return res;
}
// @lc code=end
