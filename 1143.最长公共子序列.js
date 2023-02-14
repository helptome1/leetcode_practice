/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length
  const length2 = text2.length
  // 定义dp数组
  // 1. dp[i][j]表示表示字符串text1的[1,i]区间和字符串text2的[1,j]区间的最长公共子序列长度（下标从1开始）。
  // 1.1 若text1[i] == text2[j]
  const dp = Array.from(new Array(length1 + 1), () => new Array(length2 + 1).fill(0))
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[length1][length2]
}

// longestCommonSubsequence('dmeo', 'ceshi')
// @lc code=end
