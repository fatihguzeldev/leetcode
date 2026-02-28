/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  const key = s.replace(/-/g, '').toUpperCase()
  const firstKeyLen = key.length % k || k
  let res: string[] = []
  let idx = 0

  res.push(key.slice(0, firstKeyLen))
  idx += firstKeyLen

  while (idx < key.length) {
    res.push(key.slice(idx, idx + k))
    idx += k
  }

  return res.join('-')
};
// @lc code=end

