/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const findOccurrence = (firstOccurrence: boolean) => {
    let left = 0;
    let right = nums.length - 1;
    let occurrence = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        occurrence = mid;

        if (firstOccurrence) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      if (nums[mid] > target) {
        right = mid - 1;
      }

      if (target > nums[mid]) {
        left = mid + 1;
      }
    }

    return occurrence;
  };

  return [findOccurrence(true), findOccurrence(false)];
}
// @lc code=end
