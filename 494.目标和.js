/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let result = 0
  function backtracking(startIndex, sum) {
    if (startIndex === nums.length) {
      if (sum == target) {
        result += 1
      }
      return
    }

    // for (let i = startIndex; i < nums.length; i++) {
      const num = nums[startIndex]
      sum += num
      backtracking(startIndex + 1, sum)
      sum -= num

      sum -= num
      backtracking(startIndex + 1, sum)
      sum += num
    // }
  }

  backtracking(0, 0)
  return result
}
// @lc code=end
