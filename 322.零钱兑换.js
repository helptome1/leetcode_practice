/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 使用递归解题
// var coinChange = function (coins, amount) {
//   // 1. 递归终止条件
//   if (amount === 0) return 0
//   // 2. 递归过程
//   let result = Infinity
//   for (let i = 0; i < coins.length; i++) {
//     if (amount - coins[i] >= 0) {
//       // 递归
//       result = Math.min(result, coinChange(coins, amount - coins[i]) + 1)
//     }
//   }

//   // 3. 返回值
//   return result === Infinity ? -1 : result
// }

//  -------------------使用动态规划来解决问题----------------
var coinChange = function (coins, amount) {
  // dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出
  const dp = new Array(amount + 1).fill(Infinity)
  // 设置初始条件
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    // 循环每一个硬币，以求得，凑出当前面值所需要的最小值。
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
// @lc code=end
