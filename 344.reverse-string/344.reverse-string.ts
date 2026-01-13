/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const tmp = s[r];
    s[r] = s[l];
    s[l] = tmp;
    l++;
    r--;
  }
}
// @lc code=end
