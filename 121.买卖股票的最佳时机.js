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

// 动态规划
var maxProfit = function (prices) {
  if (prices.length == 1) return 0

  return result
}
// @lc code=end