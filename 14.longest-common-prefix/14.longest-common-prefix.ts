/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let lCP = "";

  const ref = strs[0];

  for (let i = 0; i < ref.length; i++) {
    let match = true;
    let j = 0;

    while (match && j < strs.length) {
      if (strs[j][i] !== ref[i]) {
        match = false;

        return lCP;
      }

      j++;
    }

    if (match) {
      lCP += ref[i];
    }
  }

  return lCP;
}
// @lc code=end
