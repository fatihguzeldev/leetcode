/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const nCr = (n: number, r: number): number => {

    if (r === 0 || r === n) {
      return 1;
    }

    if (r > n / 2) {
      r = n - r;
    }

    let res = 1;

    for (let i = 1; i <= r; i++) {
      res = (res * (n - i + 1)) / i;
    }

    return res;
  };

  const res: number[] = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    const num = nCr(rowIndex, i);

    res.push(num);
  }

  return res;
}
// @lc code=end
