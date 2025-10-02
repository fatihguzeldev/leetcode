/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const halfIndex = Math.ceil((nums1.length + nums2.length) / 2);

  let i = 0;
  let j = halfIndex - i;

  while (
    Math.max(nums1.slice(0, i).at(-1), nums2.slice(0, j).at(-1)) >
    Math.min(nums1.slice(i).at(0), nums2.slice(j).at(0))
  ) {
    i++;
  }

  const leftMax = Math.max(nums1.slice(0, i).at(-1), nums2.slice(0, j).at(-1));
  const rightMin = Math.min(nums1.slice(i).at(0), nums2.slice(j).at(0));

  if (nums1.length + (nums2.length % 2) === 0) {
    return (leftMax + rightMin) / 2;
  } else {
    return leftMax;
  }
}
// @lc code=end
