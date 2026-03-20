/*
 * @lc app=leetcode id=590 lang=typescript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start

class _Node {
  val: number
  children: _Node[]
    constructor(val?: number) {
      this.val = (val===undefined ? 0 : val)
      this.children = []
  }
}
 

function postorder(root: _Node | null): number[] {
  const res: number[] = []

  const dfs = (node: _Node | null) => {
    if (!node) {
      return
    }

    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i])
    }

    res.push(node.val)
  }

  dfs(root)

  return res
};
// @lc code=end

