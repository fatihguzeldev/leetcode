/*
 * @lc app=leetcode id=95 lang=typescript
 *
 * [95] Unique Binary Search Trees II
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
 

function generateTrees(n: number): Array<TreeNode | null> {
  const gen = (left: number, right: number): Array<TreeNode | null> => {
    if (left === right) {
      return [new TreeNode(left)]
    }

    if (left > right) {
      return [null]
    }

    const res: Array<TreeNode | null> = []
    
    for (let val = left; val < right + 1; val++) {
      for (const lT of gen(left, val - 1)) {
        for (const rT of gen(val + 1, right)) {
          const root = new TreeNode(val, lT, rT)

          res.push(root)
        }
      }
    }

    return res
  } 
  
  return gen(1, n)
};
// @lc code=end

