/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
  const inverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    const queue: (TreeNode | null)[] = [root];

    while (queue.length) {
      const node = queue.shift();

      if (!node) {
        continue;
      }

      const temp = node.left;
      node.left = node.right;
      node.right = temp;

      queue.push(node.right);
      queue.push(node.left);
    }
  };

  inverse(root);

  return root;
}
// @lc code=end
