/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let expected = [...heights]
  expected = expected.sort((a,b) => a-b)
  let result = 0
  heights.forEach((item, index) => {
      if(item != expected[index]) {
          result = result + 1
      }
  })
  return result
};
// @lc code=end

