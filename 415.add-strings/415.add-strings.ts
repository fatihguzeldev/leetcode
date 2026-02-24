/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  let carry = 0
  const result: string[] = []

  while (p1 >= 0 || p2 >= 0 || carry > 0) {
    let digitSum = carry

    if (p1 >= 0) digitSum += num1.charCodeAt(p1--) - 48
    if (p2 >= 0) digitSum += num2.charCodeAt(p2--) - 48

    result.push(String(digitSum % 10))
    carry = (digitSum / 10) | 0
  }

  return result.reverse().join("")
}
// @lc code=end

