/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  if (word.length === 1) {
    return true
  }
  
  let firstUpper = word[0] === word[0].toUpperCase()
  let allUpper = false
  
  for (let i = 1; i < word.length; i++) {
    if (firstUpper) {
      if (i === 1) {
        allUpper = word[i] === word[i].toUpperCase()

        continue
      }

      if (allUpper && word[i] !== word[i].toUpperCase()) {
        return false
      }

      if (!allUpper && word[i] === word[i].toUpperCase()) {
        return false
      }
    } else {
      if (word[i] === word[i].toUpperCase()) {
        return false
      }
    }
  }

  return true
};
// @lc code=end

