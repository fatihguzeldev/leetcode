/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) {
    return intervals;
  }

  const res: [number, number][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    if (currStart <= end) {
      end = Math.max(currEnd, end);

      continue;
    }

    res.push([start, end]);
    [start, end] = [currStart, currEnd];
  }

  res.push([start, end]);

  return res;
}
// @lc code=end
