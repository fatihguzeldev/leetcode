/*
 * @lc app=leetcode id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
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


function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 || !root2) {
    return root1 ?? root2
  }

  const dfs = (node1: TreeNode, node2: TreeNode) => {
    node1.val += node2.val

    if (node1.left && node2.left) {
      dfs(node1.left, node2.left)
    } else if (!node1.left && node2.left) {
      node1.left = node2.left
    }

    if (node1.right && node2.right) {
      dfs(node1.right, node2.right)
    } else if (!node1.right && node2.right) {
      node1.right = node2.right
    }
  }

  dfs(root1, root2)

  return root1
};
// @lc code=end

