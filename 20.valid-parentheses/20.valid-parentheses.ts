/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  const lookup: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]]) {
      stack.push(s[i]);
    } else {
      if (!stack.length) {
        return false;
      }

      const paranthesis = stack.pop();

      if (lookup[paranthesis] === s[i]) {
        continue;
      }

      return false;
    }
  }

  return stack.length === 0;
}
// @lc code=end
