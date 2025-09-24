/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
  const rle = (s: string): string => {
    let result = "";
    let count = 1;

    for (let i = 1; i <= s.length; i++) {
      if (s[i] === s[i - 1]) {
        count++;
      } else {
        result += count.toString() + s[i - 1];
        count = 1;
      }
    }

    return result;
  };

  const count = (n: number): string => {
    if (n === 1) return "1";

    return rle(count(n - 1));
  };

  return count(n);
}
// @lc code=end
