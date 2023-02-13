/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // ------------------- NO.1贪心算法 ----------------------
  // 只要后续某天价格比当前大，就可以卖出
  // let res = 0
  // for (let i = 1; i < prices.length; i++) {
  //   res += Math.max(prices[i] - prices[i - 1], 0)
  // }
  // return res
  // ----------------------- NO.2动态规划 ------------------
  // dp[i][0] 表示第i天持有股票所得现金。
  // dp[i][1] 表示第i天不持有股票所得最多现金
  const length = prices.length
  // 创建dp数组
  const dp = new Array(length).fill([0, 0])
  dp[0][0] = 0 - prices[0]
  for (let i = 1; i < length; i++) {
    // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
    // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
    // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    // dp[i][1]表示当天未持有股票手里剩余的现金
    // 1. 前一天没有持有股票dp[i][1] = dp[i-1][1]
    // 2. 前一天持有股票dp[i-1][0] = dp[i-1][0] + prices[i]
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp[length - 1][1]
}
// @lc code=end
