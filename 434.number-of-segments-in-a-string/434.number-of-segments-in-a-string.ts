/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
  let segments = 0
  let cSeen = false

  for (const c of s) {
    if (c === ' ') {
      if (cSeen) {
        segments++
      }

      cSeen = false
    } else {
      cSeen = true
    }
  }

  if (cSeen) {
    segments++
  }

  return segments
};
// @lc code=end

