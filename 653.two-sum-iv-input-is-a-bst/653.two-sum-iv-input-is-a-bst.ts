/*
 * @lc app=leetcode id=653 lang=typescript
 *
 * [653] Two Sum IV - Input is a BST
 */

// @lc code=start
 
  // class TreeNode {
  //     val: number
  //     left: TreeNode | null
  //     right: TreeNode | null
  //     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
  //         this.val = (val===undefined ? 0 : val)
  //         this.left = (left===undefined ? null : left)
  //         this.right = (right===undefined ? null : right)
  //     }
  // }
 

function findTarget(root: TreeNode | null, k: number): boolean {
  const lookup = new Map<number, boolean>()
  let found = false

  const dfs = (node: TreeNode | null) => {
    if (!node) return

    if (lookup.has(k - node.val)) {
      found = true

      return
    }

    lookup.set(node.val, true)

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return found
};
// @lc code=end

