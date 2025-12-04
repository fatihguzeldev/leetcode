/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const map = new Map<number, number>();

  for (const char of s) {
    const code = char.charCodeAt(0);
    map.set(code, (map.get(code) ?? 0) + 1);
  }

  for (const char of t) {
    const code = char.charCodeAt(0);
    const current = map.get(code);

    if (!current) {
      return false;
    }

    map.set(code, current - 1);
  }

  return true;
};
// @lc code=end

