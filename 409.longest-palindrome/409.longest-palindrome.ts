/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  let freq = Array(52).fill(0);
  let ans = 0;

  for (const ch of s) {
    const code = ch.charCodeAt(0);

    if (code >= 97) {
      // a-z
      freq[code - 97]++;

      continue;
    }

    if (code >= 65) {
      // A-Z
      freq[code - 65 + 26]++;
    }
  }

  let hasOdd = false;

  for (const frq of freq) {
    ans += Math.floor(frq / 2) * 2;

    if (frq % 2 === 1) {
      hasOdd = true;
    }


  }

  if (hasOdd) {
    ans++;
  }

  return ans;
};
// @lc code=end

