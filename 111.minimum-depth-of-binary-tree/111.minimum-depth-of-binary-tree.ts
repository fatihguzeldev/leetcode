/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let height = 0;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    height++;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (!current.left && !current.right) return height;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return height;
}
// @lc code=end
