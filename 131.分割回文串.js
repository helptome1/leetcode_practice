/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start

const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []
  const path = []

  function backtarcking(startIndex) {
    if (startIndex >= s.length) {
      result.push(path.slice())
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s, startIndex, i)) {
        let str = s.substring(startIndex, i + 1)
        path.push(str)
        backtarcking(i + 1)
        path.pop()
      } else {
        continue
      }
    }
  }

  backtarcking(0)

  return result
}

// @lc code=end
