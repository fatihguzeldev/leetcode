/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  const res: number[] = [];
  if (words.length === 0 || s.length === 0) return res;

  const wordLen = words[0].length;
  const wordCount = new Map<string, number>();

  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) ?? 0) + 1);
  }

  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let seen = new Map<string, number>();
    let count = 0;

    while (right + wordLen <= s.length) {
      const word = s.slice(right, right + wordLen);
      right += wordLen;

      if (!wordCount.has(word)) {
        seen.clear();
        count = 0;
        left = right;
        continue;
      }

      seen.set(word, (seen.get(word) ?? 0) + 1);
      count++;

      while (seen.get(word)! > wordCount.get(word)!) {
        const leftWord = s.slice(left, left + wordLen);
        seen.set(leftWord, seen.get(leftWord)! - 1);
        count--;
        left += wordLen;
      }

      if (count === words.length) res.push(left);
    }
  }

  return res;
}
// @lc code=end
