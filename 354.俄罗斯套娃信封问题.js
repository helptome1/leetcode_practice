/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const length = envelopes.length
  // 本题其实是第300题的变种，但是从一维，变成了二维。
  // 1. 先把数据按宽度升序排列, 如果遇到宽度相同的，则按高度降序排列
  envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })
  // 2. 然后在高度上寻找递增子序列。
  // 2.1 获取高度
  const height = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    height[i] = envelopes[i][1]
  }

  // 2.2 对高度进行寻找递增子序列
  const dp = new Array(length + 1).fill(1)
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < i; j++) {
      if (height[i] > height[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let max = 0
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i])
  }
  return max
}

// @lc code=end
