/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
 */

// @lc code=start


  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
     }
    }


function findTilt(root: TreeNode | null): number {
  let sum = 0

  const dfs = (node: TreeNode | null): number  => {
    if (!node) {
      return 0
    }

    const leftSum = dfs(node.left)
    const rightSum = dfs(node.right)

    sum += Math.abs(leftSum - rightSum)

    return leftSum + rightSum + node.val
  }

  dfs(root)

  return sum
};
// @lc code=end

