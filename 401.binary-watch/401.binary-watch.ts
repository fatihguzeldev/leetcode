/*
 * @lc app=leetcode id=401 lang=typescript
 *
 * [401] Binary Watch
 */

// @lc code=start
function readBinaryWatch(turnedOn: number): string[] {
  const getSumsWithK = (arr: number[], k: number): number[] => {
    const result: number[] = [];

    const dfs = (index: number, picked: number, sum: number) => {
      if (picked === k) {
        result.push(sum);
        
        return;
      }

      if (index === arr.length) {
        return;
      }

      const remaining = arr.length - index;

      if (remaining < k - picked) {
        return;
      }

      dfs(index + 1, picked + 1, sum + arr[index]);
      dfs(index + 1, picked, sum);
    }

    dfs(0, 0, 0);

    return result;
  }

  const ans: string[] = [];
  let pairs: [number, number][] = [];

  for (let h = 0; h <= Math.min(4, turnedOn); h++) {
    let m = turnedOn - h;

    if (m > 6) {
      continue;
    }
    
    pairs.push([h, m]);
  }

  let hours = [1, 2, 4, 8];
  let minutes = [1, 2, 4, 8, 16, 32];

  for (const [h, m] of pairs) {
    const hoursSum = getSumsWithK(hours, h);
    const minutesSum = getSumsWithK(minutes, m);

    for (const hour of hoursSum) {
      if (hour > 11) {
        continue;
      }

      for (const minute of minutesSum) {
        if (minute > 59) {
          continue;
        }

        const result = hour.toString() + ":" + (minute < 10 ? "0" + minute.toString() : minute.toString());

        ans.push(result);
      }
    }
  }
  
  return ans;
}
// @lc code=end

