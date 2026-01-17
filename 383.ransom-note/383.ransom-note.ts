/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) {
    return false;
  }

  const frequency = Array<number>(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    frequency[magazine.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const left = --frequency[ransomNote.charCodeAt(i) - 97];

    if (left < 0) {
      return false;
    }
  }

  return true;
}
// @lc code=end
