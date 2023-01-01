/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const map = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ])

  let i = 0
  let result = true
  const stack = []
  while (i < s.length) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else {
      if (s[i] === stack.at(-1)) {
        stack.pop()
      } else {
        result = false
      }
    }
    console.log("stack", stack)
    i++
  }
  if (stack.length != 0) {
    result = false
  }
  return result
}
// ([])
isValid('()[]{}')
// @lc code=end
