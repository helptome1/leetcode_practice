/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let path = []
  let result = []
  function backracking(n, k, startIndex) {
    // 把路径存到result中
    if (path.length === k) {
      result.push(path.slice())
      return
    }
    // 遍历每一层开始的
    for (let i = startIndex; k - path.length <= n - i + 1; i++) {
        path.push(i)
        backracking(n, k, i + 1)
        path.pop(i)
    }
  }
  backracking(n, k, 1)
  return result
}
// @lc code=end
