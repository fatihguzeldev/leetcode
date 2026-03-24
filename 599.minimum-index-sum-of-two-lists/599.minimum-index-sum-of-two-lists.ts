/*
 * @lc app=leetcode id=599 lang=typescript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
  const mapIdx = new Map<string, number>()
  
  for (const [i, r] of list1.entries()) {
    mapIdx.set(r, i)
  }

  let minSum = Infinity
  const res: string[] = []

  for (const [i, r] of list2.entries()) {
    if (!mapIdx.has(r)) {
      continue
    }

    const sum = i + mapIdx.get(r)

    if (sum < minSum) {
      minSum = sum
      res.length = 0
      res.push(r)
    } else if (sum === minSum) {
      res.push(r)
    }
  }

  return res
};
// @lc code=end

