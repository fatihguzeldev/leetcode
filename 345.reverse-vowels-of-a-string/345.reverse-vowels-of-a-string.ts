/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowels = new Set<string>([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);

  let l = 0;
  let r = s.length - 1;
  let arr = s.split("");

  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  return arr.join("");
}
// @lc code=end
