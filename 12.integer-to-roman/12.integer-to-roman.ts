/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start

function intToRoman(num: number): string {
  const lookup: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return lookup.reduce((acc, [roman, value]) => {
    while (num >= value) {
      acc += roman;
      num -= value;
    }
    return acc;
  }, "");
}
// @lc code=end
