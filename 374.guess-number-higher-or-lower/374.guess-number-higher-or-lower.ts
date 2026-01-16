/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

declare function guess(num: number): -1 | 0 | 1;


function guessNumber(n: number): number {
  let l = 1;
  let r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const guessed = guess(mid);

    if (guessed === 0) {
      return mid;
    }

    if (guessed === -1) {
      r = mid - 1;
    }

    if (guessed === 1) {
      l = mid + 1;
    }
  }
};
// @lc code=end

