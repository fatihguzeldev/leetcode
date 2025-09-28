/*
 * @lc app=leetcode id=1584 lang=typescript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
  const manhattan = (p1: number[], p2: number[]) => {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  };

  const length = points.length;
  const minDist: number[] = new Array(length).fill(Infinity);
  const inMST: boolean[] = new Array(length).fill(false);

  minDist[0] = 0;

  let result = 0;

  for (let i = 0; i < length; i++) {
    let nextNode = -1;
    let nextDistance = Infinity;

    for (let j = 0; j < length; j++) {
      if (!inMST[j] && minDist[j] < nextDistance) {
        nextDistance = minDist[j];
        nextNode = j;
      }
    }

    inMST[nextNode] = true;
    result += nextDistance;

    for (let j = 0; j < length; j++) {
      if (!inMST[j]) {
        const distance = manhattan(points[nextNode], points[j]);

        if (distance < minDist[j]) {
          minDist[j] = distance;
        }
      }
    }
  }

  return result;
}
// @lc code=end
