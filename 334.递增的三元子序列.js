/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if(nums.length < 3) return false
  const dp = new Array(nums.length).fill(0)

  for (let i = 1; i < nums.length; i++) {
      for(let j = 0; j < i; j++) {
          if(nums[i] > nums[j]) {
              dp[i] = Math.max(dp[j] + 1, dp[i])
          }
      }
  }
  console.log(dp)
  return dp[nums.length - 1] > 2 ? true : false
}
increasingTriplet([2,1,5,0,4,6])
// @lc code=end
