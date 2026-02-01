/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
*/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: {
    node: TreeNode,
    type: "left" | "right" | "root"
  }[] = [{ node: root, type: "root" }];
  let sum = 0;

  while (stack.length) {
    const node = stack.pop();
    console.log(node.node.val)

    if (node.type === "left" && !node.node.left && !node.node.right) {
      sum += node.node.val;
    }

    if (node.node.left) {
      stack.push({ node: node.node.left, type: "left" });
    }

    if (node.node.right) {
      stack.push({ node: node.node.right, type: "right" });
    }
  }

  return sum;
};
// @lc code=end

