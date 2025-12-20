/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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
 

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  const stack: {node: TreeNode, path: string[]}[] = [{node: root, path: []}];

  while (stack.length > 0) {
		const top = stack.pop(); 
		const path = [...top.path, String(top.node.val)];

		if (top.node.left) {
			stack.push({node: top.node.left, path});
		}

		if (top.node.right) {
			stack.push({node: top.node.right, path});
		}

		if (!top.node.right && !top.node.left) {
			res.push(path.join('->'));
		}
  }

	return res;
};
// @lc code=end

