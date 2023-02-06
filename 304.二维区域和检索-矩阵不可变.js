/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const matrixRowLength = matrix.length + 1
  const matrixColLength = matrix[0].length + 1
  // 1. 定义一个二维数组，记录 matrix 中子矩阵 [0, 0, i-1, j-1] 的元素和
  const preSum = new Array(matrixRowLength)
  for (let i = 0; i < matrixRowLength; i++) {
    preSum[i] = new Array(matrixColLength)
  }

  // 2. 计算每一个矩阵列表数据的和
  for (let i = 0; i < matrixRowLength; i++) {
    for (let j = 0; j < matrixColLength; j++) {
      if (i == 0 || j == 0) {
        preSum[i][j] = 0
      } else {
        // 计算每个矩阵 [0, 0, i, j] 的元素和
        preSum[i][j] = preSum[i][j - 1] + preSum[i - 1][j] + matrix[i - 1][j - 1] - preSum[i - 1][j - 1]
      }
    }
  }
  this.preSum = preSum
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const result = this.preSum[row2 + 1][col2 + 1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1] + this.preSum[row1][col1]
  return result
}

// const demo = NumMatrix([
//   [1, 2],
//   [3, 4]
// ])
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
