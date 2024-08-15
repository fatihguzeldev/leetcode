/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const charIndexes = new Map<string, number>();
  let leftPointer = 0;
  let maxLength = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const currentChar = s[rightPointer];

    if (
      charIndexes.has(currentChar) &&
      charIndexes.get(currentChar)! >= leftPointer
    ) {
      leftPointer = charIndexes.get(currentChar)! + 1;
    }

    charIndexes.set(currentChar, rightPointer);

    maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
  }

  return maxLength;
}
// @lc code=end
