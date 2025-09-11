/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let carry = 0;
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let sum = [];

  while (aIndex >= 0 || bIndex >= 0 || carry) {
    let digitSum = carry;

    if (aIndex >= 0) {
      digitSum += a[aIndex] === "1" ? 1 : 0;
      aIndex--;
    }

    if (bIndex >= 0) {
      digitSum += b[bIndex] === "1" ? 1 : 0;
      bIndex--;
    }

    let digit = digitSum & 1; // digitSum % 2
    carry = digitSum >> 1; // Math.floor(sum / 2)

    sum.push(digit);
  }

  return sum.reverse().join("");
}
// @lc code=end
