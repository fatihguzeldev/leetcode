/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let filteredStr = "";
  let isIntRead = false;
  let isSignRead = false;

  for (const char of s) {
    if (!isIntRead && !isSignRead && char === " ") {
      continue;
    } else if (!isIntRead && !isSignRead && (char === "-" || char === "+")) {
      isSignRead = true;
      filteredStr += char;
    } else if (char === " " || isNaN(Number(char))) {
      break;
    } else {
      isIntRead = true;
      filteredStr += char;
    }
  }

  let actualNumber = Number(filteredStr);

  if (isNaN(actualNumber)) {
    return 0;
  }

  if (actualNumber < (-2) ** 31) {
    actualNumber = (-2) ** 31;
  }

  if (actualNumber > 2 ** 31 - 1) {
    actualNumber = 2 ** 31 - 1;
  }

  return actualNumber;
}
// @lc code=end
