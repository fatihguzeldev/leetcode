/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const reverseFromIndex = (nums: number[], i: number) => {
    let start = i;
    let end = nums.length - 1;

    while (end > start) {
      [nums[start], nums[end]] = [nums[end], nums[start]];

      start++;
      end--;
    }
  };

  let pivotIndex: number = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIndex = i;

      break;
    }
  }

  if (pivotIndex === -1) {
    reverseFromIndex(nums, 0);

    return;
  }

  let nextSmallestIndex: number = -1;

  for (let i = nums.length - 1; i > pivotIndex; i--) {
    if (nums[i] > nums[pivotIndex]) {
      nextSmallestIndex = i;

      break;
    }
  }

  [nums[pivotIndex], nums[nextSmallestIndex]] = [
    nums[nextSmallestIndex],
    nums[pivotIndex],
  ];

  reverseFromIndex(nums, pivotIndex + 1);
}
// @lc code=end
