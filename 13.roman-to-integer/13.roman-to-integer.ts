/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romanRecords: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = romanRecords[s[i]];
    const next = romanRecords[s[i + 1]];

    if (next > curr) {
      sum -= curr;
    } else {
      sum += curr;
    }
  }

  return sum;
}
// @lc code=end
