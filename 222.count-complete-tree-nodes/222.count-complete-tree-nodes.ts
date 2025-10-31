/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function countNodes(root: TreeNode | null): number {
  const leftHeight = (node: TreeNode | null): number => {
    let h = 0;

    while (node) {
      h++;
      node = node.left;
    }

    return h;
  };

  const rightHeight = (node: TreeNode | null): number => {
    let h = 0;

    while (node) {
      h++;
      node = node.right;
    }

    return h;
  };

  const heightLeft = leftHeight(root);
  const heightRight = rightHeight(root);

  if (heightLeft === heightRight) {
    return 2 ** (heightLeft) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}
// @lc code=end
