/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: [number, number][] = [];
  let newStart = newInterval[0];
  let newEnd = newInterval[1];

  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];

    if (end < newStart) {
      res.push([start, end]);

      continue;
    }

    if (start > newEnd) {
      res.push([newStart, newEnd]);

      newStart = start;
      newEnd = end;

      continue;
    }

    newStart = Math.min(newStart, start);
    newEnd = Math.max(newEnd, end);
  }

  res.push([newStart, newEnd]);

  return res;
}
// @lc code=end
