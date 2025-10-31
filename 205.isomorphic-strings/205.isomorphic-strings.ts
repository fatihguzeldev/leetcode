/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const sToT: Map<string, string> = new Map<string, string>();
  const tToS: Map<string, string> = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i];
    const letterT = t[i];

    const sMappedTo = sToT.get(letterS);
    const tMappedTo = tToS.get(letterT);

    if (!sMappedTo) {
      if (tMappedTo && tMappedTo !== s[i]) {
        return false;
      }

      sToT.set(letterS, letterT);
      tToS.set(letterT, letterS);

      continue;
    }

    if (sMappedTo !== letterT) {
      return false;
    }
  }

  return true;
}
// @lc code=end
