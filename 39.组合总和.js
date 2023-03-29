/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []
  let path = []
  function backtarcking(sum, index) {
    if (sum === target) {
      result.push(path.slice())
      return
    }
    if (sum > target) return

    for (let i = index; i < candidates.length; i++) {
      const num = candidates[i]
      sum += num
      path.push(num)
      backtarcking(sum, i)
      path.pop(num)
      sum -= num
    }
  }

  backtarcking(0, 0)
  return result
}
// @lc code=end
