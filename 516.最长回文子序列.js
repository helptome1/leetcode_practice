/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length
  let dp = new Array(length).fill(0).map(() => new Array(length).fill(0))
  for (let i = 0; i < length; i++) {
    dp[i][i] = 1
  }
  // 反向遍历确保正确的递推顺序
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][length - 1]
}

longestPalindromeSubseq('abcdba')
// @lc code=end
