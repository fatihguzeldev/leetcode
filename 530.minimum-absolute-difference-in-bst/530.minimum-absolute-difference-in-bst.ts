/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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
 

function getMinimumDifference(root: TreeNode | null): number {
  let min: number = Infinity
  let prev: TreeNode | null = null

  const inorder = (root: TreeNode | null) => {
    if (!root) {
      return
    }

    const node = root

    

    inorder(node.left)

    if (prev !== null) {
      const curr = Math.abs(prev.val - node.val)
      min = Math.min(min, curr)
    }
    prev = node

    inorder(node.right)
  }

  inorder(root)

  return min
};
// @lc code=end

