/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const next = (n: number): number => {
    let sum = 0;

    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    return sum;
  };

  let slow = n;
  let fast = n;

  do {
    slow = next(slow);
    fast = next(next(fast));
  } while (slow !== fast);

  return fast === 1;
}
// @lc code=end
