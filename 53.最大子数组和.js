/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划解体
// var maxSubArray = function (nums) {
//   // dp[i]代表以nums[i]为结尾的最大子数组的和
//   const dp = new Array(nums.length).fill(0)
//   dp[0] = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
//   }

//   return Math.max(...dp)
// }

// 前缀和解体思路/
var maxSubArray = function (nums) {
  if(nums.length === 1) return nums[0]
  // dp[i]代表以nums[i]为结尾的最大子数组的和
  const preSum = new Array(nums.length + 1).fill(0)
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  let min = Infinity
  let res = -Infinity
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(preSum[i], min)
    res = Math.max(res, preSum[i + 1] - min)
  }
  return res
}
maxSubArray([-2, -1])
// @lc code=end
