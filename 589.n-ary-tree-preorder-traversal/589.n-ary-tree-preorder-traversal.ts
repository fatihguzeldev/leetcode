/*
 * @lc app=leetcode id=589 lang=typescript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
 
class _Node {
  val: number
  children: _Node[]

  constructor(val?: number, children?: _Node[]) {
      this.val = (val===undefined ? 0 : val)
      this.children = (children===undefined ? [] : children)
  }
}
 
function preorder(root: _Node | null): number[] {
  if (!root) {
    return []
  }
  
  const res: number[] = []
  const stack: _Node[] = [root]

  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }

  return res
};
// @lc code=end

