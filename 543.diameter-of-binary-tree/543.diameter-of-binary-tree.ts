/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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
 

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }

    const l = dfs(node.left)
    const r = dfs(node.right)

    diameter = Math.max(diameter, l + r)

    return 1 + Math.max(l, r)
  }

  dfs(root)

  return diameter
};
// @lc code=end

