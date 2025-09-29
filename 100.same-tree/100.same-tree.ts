/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

// @lc code=start

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stackP: TreeNode[] = [];
  const stackQ: TreeNode[] = [];
  let currP = p;
  let currQ = q;

  while (currP || currQ || stackP.length || stackQ.length) {
    while (currP && currQ) {
      stackP.push(currP);
      stackQ.push(currQ);
      currP = currP.left;
      currQ = currQ.left;
    }

    if (currP || currQ) {
      return false;
    }

    currP = stackP.pop();
    currQ = stackQ.pop();

    if (currP.val !== currQ.val) {
      return false;
    }

    currP = currP.right;
    currQ = currQ.right;
  }

  return true;
}
// @lc code=end
