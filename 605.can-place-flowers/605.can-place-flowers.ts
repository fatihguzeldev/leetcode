/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let max = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      max++
      flowerbed[i] = 1
    }

    if (max >= n) {
      return true
    }
  }

  return max >= n
};
// @lc code=end

