/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const res: number[] = [];

  for (const n of nums2) {
    if (set1.has(n)) {
      res.push(n);
      set1.delete(n);
    }
  }

  return res;
}

// @lc code=end
