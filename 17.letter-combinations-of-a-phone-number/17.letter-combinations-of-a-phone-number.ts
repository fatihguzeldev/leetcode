/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const mapping: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const input: string[][] = [];

  for (let i = 0; i < digits.length; i++) {
    input.push(mapping[digits[i]]);
  }

  const result: string[] = [];

  const dfs = (path: string, depth: number) => {
    if (depth === input.length) {
      if (path !== "") {
        result.push(path);
      }

      return;
    }

    for (const char of input[depth]) {
      dfs(path + char, depth + 1);
    }
  };

  dfs("", 0);

  return result;
}
// @lc code=end
