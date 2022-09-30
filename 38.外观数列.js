/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1'
  function Trave(s) {
    --n
    console.log('n', n)

    let result = '',
      slow = 0,
      fast = 0
    while (fast < s.length) {
      console.log('fast', fast)
      if (fast === s.length - 1) {
        if (s[fast] == s[slow]) {
          result += fast - slow + 1 + s[slow]
        } else {
          result += fast - slow + s[slow] + '1' + s[fast]
        }
      } else if (s[fast] != s[slow]) {
        result += fast - slow + s[slow]
        slow = fast
      }
      fast++
    }
    console.log('result', result)
    if (n === 1) return result
    return Trave(result)
  }
  return Trave('1')
}

const resultEnd = countAndSay(6)
console.log('resultEnd', resultEnd)
// @lc code=end
