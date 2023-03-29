/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  const path = []
  candidates.sort((a, b) => a - b)
  function backtarcking(sum, start) {
    if (sum >= target) {
      if (sum === target) {
        result.push(path.slice())
      }
      return
    }

    for (let i = start; i < candidates.length; i++) {
      // 排除同一列相同数据
      if (i - 1 >= start && candidates[i - 1] === candidates[i]) {
        continue
      }
      const num = candidates[i]
      path.push(num)
      sum += num
      backtarcking(sum, i + 1)
      path.pop(num)
      sum -= num
    }
  }

  backtarcking(0, 0)
  return result
}
// @lc code=end
