/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let a = 0
  let l = 0

  for (const c of s) {
    if (c === 'A') {
      a++

      if (a === 2) {
        return false
      }

      l = 0

      continue
    }

    if (c === 'L') {
      l++

      if (l === 3) {
        return false
      }

      continue
    }

    l = 0
  }


  return true
};
// @lc code=end

