/*
 * @lc app=leetcode id=405 lang=typescript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
function toHex(num: number): string {
  if (num === 0) return "0";

  const hex = "0123456789abcdef";

  let n = num >= 0 ? num : 2 ** 32 + num;
  let ans = ""

  while (n > 0) {
    let digit = hex[n % 16];
    n = Math.floor(n / 16);
    ans = digit + ans;
  }

  return ans;
};
// @lc code=end

