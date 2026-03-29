/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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
 

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return []

  const queue: TreeNode[] = [root]
  const res: number[] = []

  while (queue.length) {
    const size = queue.length
    let sum = 0

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    res.push(sum / size)
  }

  return res
}
// @lc code=end

