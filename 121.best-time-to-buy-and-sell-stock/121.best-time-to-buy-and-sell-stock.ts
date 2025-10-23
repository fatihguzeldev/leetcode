/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minSoFar = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minSoFar) {
      minSoFar = prices[i];
    }

    const profit = prices[i] - minSoFar;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}
// @lc code=end
