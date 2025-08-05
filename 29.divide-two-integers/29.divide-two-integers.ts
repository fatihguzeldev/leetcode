/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  if (dividend === INT_MIN && divisor === -1) return INT_MAX;

  if (dividend === INT_MIN && divisor === 1) return INT_MIN;

  const sign = dividend < 0 !== divisor < 0 ? -1 : 1;

  let dvd = -Math.abs(dividend);
  const dvs = -Math.abs(divisor);
  let quotient = 0;

  while (dvd <= dvs) {
    let temp = dvs;
    let multiple = 1;

    while (dvd <= temp << 1 && temp << 1 < 0) {
      temp <<= 1;
      multiple <<= 1;
    }

    dvd -= temp;
    quotient += multiple;
  }

  return sign < 0 ? -quotient : quotient;
}

// @lc code=end
