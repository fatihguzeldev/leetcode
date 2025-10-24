/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const isAlphanumeric = (ch: string) => {
    const code = ch.charCodeAt(0);

    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    );
  };

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (!isAlphanumeric(s[left])) {
      left++;

      continue;
    }

    if (!isAlphanumeric(s[right])) {
      right--;

      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
// @lc code=end
