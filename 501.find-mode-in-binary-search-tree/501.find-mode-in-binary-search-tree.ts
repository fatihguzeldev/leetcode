/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
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
 

function findMode(root: TreeNode | null): number[] {
  let prev: number | null = null
  let count = 0
  let maxCount = 0
  const res: number[] = []

  const inorder = (node: TreeNode) => {
    if (!node) {
      return false
    }

    inorder(node.left)
    
    if (prev === node.val) {
      count ++
    } else {
      count = 1
      prev = node.val
    }

    if (count > maxCount) {
      maxCount = count
      res.length = 0
      res.push(node.val)
    } else if (count === maxCount) {
      res.push(node.val)
    }

    inorder(node.right)
  }

  inorder(root)

  return res
};
// @lc code=end

