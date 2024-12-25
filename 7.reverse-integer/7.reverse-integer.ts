/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  let reversed = "";

  if (x < 0) {
    reversed += "-";
  }

  reversed += Math.abs(x).toString().split("").reverse().join("");

  const reversedNum = Number(reversed);

  if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversedNum;
}
// @lc code=end
