/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0
  let n = nums.length
  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) {
    //如果是奇数，那么分割不了，直接返回false
    //如果是奇数，那么分割不了，直接返回false
    return false
  }
  sum = sum / 2
  // 初始化dp数组。
  //dp[i][j]表示前i个物品是否能装满容积为j的背包，当dp[i][j]为true时表示恰好可以装满
  //最后求的是 dp[n][sum] 表示前n个物品能否把容量为sum的背包恰好装满
  //dp数组长度是n+1，而且是二维数组，第一维表示物品的索引，第二个维度表示背包大小
  const dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(false))
  //dp数组初始化，dp[..][0] = true表示背包容量为0，这时候就已经装满了，
  //dp[0][..] = false 表示没有物品，肯定装不满
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }

  for (let i = 1; i <= n; i++) {
    let num = nums[i - 1]
    //j从1开始，j为0的情况已经在dp数组初始化的时候完成了
    for (let j = 1; j <= sum; j++) {
        if(j - num< 0) { // 背包容量不足 不能放入背包
            dp[i][j] = dp[i - 1][j]  //dp[i][j]取决于前i-1个物品是否能前好装满j的容量
        } else {
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
        }
    }
  }
  return dp[n][sum]
}

// canPartition([1, 5, 11, 5])
// @lc code=end
