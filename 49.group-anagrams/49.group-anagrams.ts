/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const groups: Record<string, string[]> = {};

  for (const str of strs) {
    const freq = Array(26).fill(0);

    for (const ch of str) {
      freq[ch.charCodeAt(0) - 97]++;
    }

    const key = freq.join(',');

    (groups[key] ??= []).push(str);
  }

  return Object.values(groups);
}
// @lc code=end
