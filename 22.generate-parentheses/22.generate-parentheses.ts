/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const results: string[] = [];

  const backtrace = (current: string, open: number, closed: number) => {
    if (open === 0 && closed === 0) {
      results.push(current);

      return;
    }

    if (open > 0) {
      backtrace(current + "(", open - 1, closed);
    }

    if (closed > open) {
      backtrace(current + ")", open, closed - 1);
    }
  };

  backtrace("", n, n);

  return results;
}
// @lc code=end
