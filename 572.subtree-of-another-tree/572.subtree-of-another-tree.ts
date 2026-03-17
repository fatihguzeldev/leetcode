/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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
 

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const isSameTree = (s: TreeNode | null, t: TreeNode | null): boolean => {
    if (!s && !t) return true
    if (!s || !t) return false
    if (s.val !== t.val) return false

    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
  }

  if (!root) return false

  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
// @lc code=end

