/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const length = matrix.length
  for (var i = 0; i < length; i++) {
    for (var j = i; j < length; j++) {
      // 1. 镜像折叠图像。
      var tempValue = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tempValue
    }
  }
  for (var i = 0; i < length; i++) {
    matrix[i].reverse()
  }
  return matrix
}

// @lc code=end
