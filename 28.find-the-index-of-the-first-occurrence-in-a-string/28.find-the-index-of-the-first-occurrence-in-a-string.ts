/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const buildLPS = (pattern: string): number[] => {
    const lps = Array<number>(needle.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (pattern[len] === pattern[i]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len > 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }

    return lps;
  };

  const lps = buildLPS(needle);

  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    } else if (haystack[i] === needle[j]) {
      i++;
      j++;

      if (j === needle.length) {
        return i - j;
      }
    }
  }

  return -1;
}
// @lc code=end
