/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0
  let res = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1)
      if (isPalindrome(str) && str.length > max) {
        max = str.length
        res = str
      }
    }
  }
  return res
}

function isPalindrome(str) {
  const length = str.length
  if (length === 1) return true
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i - 1]) {
      return false
    }
  }
  return true
}
// @lc code=end
