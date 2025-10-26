/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack1: TreeNode[] = [root];
  const stack2: TreeNode[] = [];
  const res: number[] = [];

  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }

    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length) {
    res.push(stack2.pop().val);
  }

  return res;
}
// @lc code=end
