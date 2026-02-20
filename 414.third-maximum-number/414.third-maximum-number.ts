/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  const select = (k: number, left: number, right: number, nums: number[]): number => {
    if (left === right) {
      return nums[left]
    }

    const pivotIndex = partition(nums, left, right);

    if (k === pivotIndex) {
      return nums[k];
    } else if (k < pivotIndex) {
      return select(k, left, pivotIndex - 1, nums);
    } else {
      return select(k, pivotIndex + 1, right, nums);
    }
  }

  const partition = (nums: number[], left: number, right: number): number => {
    const pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];

        i++
      }
    }

    [nums[i], nums[right]] = [nums[right], nums[i]];

    return i;
  }

  const unique = Array.from(new Set(nums));

  if (unique.length < 3) {
    return Math.max(...unique);
  }

  const targetIndex = unique.length - 3;

  return select(targetIndex, 0, unique.length - 1, unique)
};
// @lc code=end

