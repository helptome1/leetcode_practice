/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let path = []
  // let sum = 0
  let result = []

  function backtracking(k, n, startIndex, sum) {
    if(sum > n) {
      return
    }
    if (path.length === k) {
      if (sum === n) {
        result.push(path.slice())
      }
      return
    }

    for (let i = startIndex; k - path.length <= 9 - i + 1; i++) {
      sum += i
      path.push(i)
      backtracking(k, n, i + 1, sum)
      sum -= i
      path.pop(i)
    }
  }
  backtracking(k, n, 1, 0)
  return result
}

// combinationSum3(2, 4)
// @lc code=end
