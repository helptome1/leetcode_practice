/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp代表的是nums[i]为结尾的最长递增子序列的长度。
  const dp = new Array(nums.length + 1).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j] ) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}
// lengthOfLIS([1,4,3,4,2])
// @lc code=end
