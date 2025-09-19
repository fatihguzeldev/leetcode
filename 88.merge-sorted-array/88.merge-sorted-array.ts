/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let lastIndexNums1 = m - 1;
  let lastIndexNums2 = n - 1;
  let mergeIndex = m + n - 1;

  while (lastIndexNums2 >= 0) {
    if (lastIndexNums1 >= 0 && nums1[lastIndexNums1] > nums2[lastIndexNums2]) {
      nums1[mergeIndex] = nums1[lastIndexNums1];
      lastIndexNums1--;
    } else {
      nums1[mergeIndex] = nums2[lastIndexNums2];
      lastIndexNums2--;
    }
    mergeIndex--;
  }
}
// @lc code=end
