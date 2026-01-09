/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
  private prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array(nums.length);

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.prefix[i] = sum;
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.prefix[right];
    }

    return this.prefix[right] - this.prefix[left - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
