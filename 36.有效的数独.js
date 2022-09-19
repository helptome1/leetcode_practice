/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let i = 0
  let rowKey = true
  let colKay = true
  let matrixKay = true
  let matrixMap = new Map()
  while (i < 9) {
    let rowMap = new Map()
    let colMap = new Map()
    row = board[i]
    for (let j = 0; j < 9; j++) {
      // 判断每一行中没有重复的数字
      if (!rowMap.has(row[j])) {
        rowMap.set(row[j], j)
      } else if (row[j] != '.') {
        rowKey = false
        // continue
        return false
      }
      // 判断每一列中是否有重复数字
      if (!colMap.has(board[j][i])) {
        colMap.set(board[j][i], j)
      } else if (board[j][i] != '.') {
        colKay = false
        // continue
        return false
      }
      // todo: 判断一个9宫格没有重复数据；[0-2][3-5][6-8]
      let rowNums = Math.ceil((i + 1) / 3)
      let colNums = Math.ceil((j + 1) / 3) 
      const group = 3 * (rowNums - 1) + colNums - 1

      if (!matrixMap.has(group)) {
        matrixMap.set(group, [board[i][j]])
      } else if (!matrixMap.get(group).includes(board[i][j]) || board[i][j] === '.') {
        matrixMap.get(group).push(board[i][j])
      } else {
        matrixKay = false
        // continue
        return false
      }
      // console.log(group)
    }
    i++
  }
  // console.log('rowKey', rowKey)
  // console.log('colKay:', colKay)
  // console.log('matrixKay:', matrixKay)
  return rowKey && colKay && matrixKay
}
const isTrue = isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '2', '.', '.', '.', '.', '6', '.'],
  ['2', '.', '.', '.', '6', '.', '4', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '7', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])
console.log(isTrue)
// @lc code=end
