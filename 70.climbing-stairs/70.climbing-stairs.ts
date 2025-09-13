/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n;

  let twoStepsBefore = 1;
  let oneStepBefore = 2;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = result;
  }

  return result;
}
// @lc code=end
