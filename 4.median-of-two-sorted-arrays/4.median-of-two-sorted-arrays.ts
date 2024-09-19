/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const halfIndex = Math.ceil((nums1.length + nums2.length) / 2);

  // Partition indexes
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

// O(n+m) soluion -- BAD!
/*
  let sortedMergedArray: number[] = [];
  let nums1Index = 0;
  let nums2Index = 0;

  // merge
  while (nums1Index < nums1.length && nums2Index < nums2.length) {
    if (nums1[nums1Index] <= nums2[nums2Index]) {
      sortedMergedArray.push(nums1[nums1Index]);

      nums1Index++;
    } else {
      sortedMergedArray.push(nums2[nums2Index]);

      nums2Index++;
    }
  }

  sortedMergedArray.push(
    ...nums1.slice(nums1Index),
    ...nums2.slice(nums2Index)
  );

  const middleIndex = Math.floor(sortedMergedArray.length / 2);

  if (sortedMergedArray.length % 2 === 0) {
    return (
      (sortedMergedArray[middleIndex - 1] + sortedMergedArray[middleIndex]) / 2
    );
  } else {
    return sortedMergedArray[middleIndex];
  }
*/
