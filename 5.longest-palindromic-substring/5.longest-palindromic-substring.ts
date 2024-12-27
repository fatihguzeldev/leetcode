/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let longest = "";

  const isPal = (left: number, right: number, s: string) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    let evenPalindrome = isPal(i, i + 1, s);
    let oddPalindrome = isPal(i, i, s);

    let longestPalindrome =
      evenPalindrome.length > oddPalindrome.length
        ? evenPalindrome
        : oddPalindrome;

    if (longestPalindrome.length > longest.length) {
      longest = longestPalindrome;
    }
  }

  return longest;
}
// @lc code=end
