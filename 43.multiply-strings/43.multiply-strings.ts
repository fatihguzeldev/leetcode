/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  const n = num1.length;
  const m = num2.length;
  const res = Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const mul = +num1[i] * +num2[j];
      const sum = mul + res[i + j + 1];
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }

  let i = 0;

  while (i < res.length - 1 && res[i] === 0) {
    i++;
  }

  return res.slice(i).join("");
}
// @lc code=end
