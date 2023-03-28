/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const resultLength = digits.length

  if (!resultLength) return []
  const stringMap = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz' // 9
  ]
  if (resultLength === 1) return stringMap[digits].split('')
  const result = []
  const path = []
  function backtracking(digitsArray, deep) {
    // 终止回调
    if (path.length == resultLength) {
      result.push(path.join(''))
      return
    }
    for (let v of stringMap[digits[deep]]) {
      path.push(v)
      backtracking(digitsArray, deep + 1)
      path.pop(v)
    }
  }
  backtracking(digits.split(''), 0)

  return result
}
// @lc code=end
