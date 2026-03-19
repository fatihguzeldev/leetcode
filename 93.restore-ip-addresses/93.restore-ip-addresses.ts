/*
 * @lc app=leetcode id=93 lang=typescript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const res: string[] = []

  const backtrack = (path: string[], start: number) => {
    if (path.length === 4 && start === s.length) {
      res.push(path.join('.'))
      
      return
    }

    if (path.length > 4) {
      return
    }

    const remainingChars = s.length - start
    const remainingSlots = 4 - path.length

    if (remainingChars < remainingSlots || remainingChars > remainingChars * 3) {
      return
    }

    path.push(s.slice(start, start + 1))
    backtrack(path, start + 1)
    path.pop()

    if (s[start] !== '0') {
      path.push(s.slice(start, start + 2))
      backtrack(path, start + 2)
      path.pop()

      if (!(+s.slice(start, start + 3) > 255)) {
        path.push(s.slice(start, start + 3))
        backtrack(path, start + 3)
        path.pop()
      }
    }
  }

  backtrack([], 0)

  return res
};
// @lc code=end

