/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 贪心算法
// var maxProfit = function (prices) {
//   if (prices.length == 1) return 0
//   let i = 0;
//   let min = prices[0]
//   let result = 0
//   while(i < prices.length) {
//     min = Math.min(min, prices[i])
//     result = Math.max(result, prices[i] - min)
//     i ++;
//   }
//   return result
// }

// ----------------------- NO.2动态规划 ------------------
// dp[i][0]表示当天持有股票时的手里剩余的现金
// 1. 前一天没有持有股票dp[i-1][1] - prices[i]
// 2. 前一天持有股票dp[i-1][0]
// dp[i][1]表示当天未持有股票手里剩余的现金
// 1. 前一天没有持有股票dp[i][1] = dp[i-1][1]
// 2. 前一天持有股票dp[i-1][0] = dp[i-1][0] + prices[i]

var maxProfit = function (prices) {
  const length = prices.length
  if (length == 1) return 0
  // 创建dp数组
  const dp = new Array(length).fill([0, 0])
  dp[0][0] = -prices[0]
  for (let i = 1; i < length; i++) {
    // 计算dp数组
    dp[i] = [Math.max(dp[i - 1][0], - prices[i]), Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])]
  }
  return dp[length - 1][1]
}
// @lc code=end
