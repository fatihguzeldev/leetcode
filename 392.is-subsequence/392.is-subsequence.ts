/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let prevIdx = -1;
  const idxs = new Map<string, number[]>();

  for (let i = 0; i < t.length; i++) {
    const arr = idxs.get(t[i]) ?? [];
    arr.push(i);
    idxs.set(t[i], arr);
  }

  for (let i = 0; i < s.length; i++) {
    const arr = idxs.get(s[i]);

    if (!arr) {
      return false;
    }

    let l = 0;
    let r = arr.length - 1;
    let idx = -1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (arr[m] > prevIdx) {
        idx = arr[m];
        r = m - 1;
      }

      if (arr[m] <= prevIdx) {
        l = m + 1;
      }
    }

    if (idx === -1) {
      return false;
    }

    prevIdx = idx;
  }

  return true;
}
// @lc code=end
