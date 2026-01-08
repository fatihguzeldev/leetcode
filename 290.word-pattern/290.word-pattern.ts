/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const sToP = new Map<string, string>();
  const pToS = new Map<string, string>();
  const words = s.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    const p = pattern[i];
    const w = words[i];

    if (pToS.has(p) && pToS.get(p) !== w) {
      return false
    }

    if (sToP.has(w) && sToP.get(w) !== p) {
      return false
    }

    sToP.set(w, p);
    pToS.set(p, w);
  }

  return true;
};
// @lc code=end

