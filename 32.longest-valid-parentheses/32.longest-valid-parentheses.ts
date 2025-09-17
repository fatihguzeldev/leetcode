/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  const stack: number[] = [-1];
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (!stack.length) {
        stack.push(i);
      } else {
        const currentLength = i - stack[stack.length - 1];
        longest = Math.max(longest, currentLength);
      }
    }
  }

  return longest;
}
// @lc code=end
