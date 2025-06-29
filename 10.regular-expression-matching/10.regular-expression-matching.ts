/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const memo = new Map<string, boolean>();

  const recursiveIsMatch = (sIndex: number, pIndex: number) => {
    const key = `${sIndex}:${pIndex}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (pIndex === p.length) {
      return sIndex === s.length;
    }

    const currentMatch =
      sIndex < s.length && (s[sIndex] === p[pIndex] || p[pIndex] === ".");

    let res: boolean;

    if (p[pIndex + 1] === "*") {
      res =
        recursiveIsMatch(sIndex, pIndex + 2) ||
        (currentMatch && recursiveIsMatch(sIndex + 1, pIndex));
    } else {
      res = currentMatch && recursiveIsMatch(sIndex + 1, pIndex + 1);
    }

    memo.set(key, res);
    
    return res;
  };

  return recursiveIsMatch(0, 0);
}
// @lc code=end
