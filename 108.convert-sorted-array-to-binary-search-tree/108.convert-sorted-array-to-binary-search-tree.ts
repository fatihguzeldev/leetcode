/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const bst = (left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null;
    }

    const mid = Math.floor((left + right) / 2);

    const root = new TreeNode(
      nums[mid],
      bst(left, mid - 1),
      bst(mid + 1, right)
    );

    return root;
  };

  return bst(0, nums.length - 1);
}
// @lc code=end
