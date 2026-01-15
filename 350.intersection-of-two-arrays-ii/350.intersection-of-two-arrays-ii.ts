/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const lookup = new Map<number, number>();
  const res: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    lookup.set(nums1[i], (lookup.get(nums1[i]) ?? 0) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    const count = lookup.get(nums2[i]);

    if (count > 0) {
      res.push(nums2[i]);
      lookup.set(nums2[i], count - 1);
    }
  }

  return res;
}
// @lc code=end
