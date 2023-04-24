/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let tempStr = s.trim()
  const strArr = tempStr.split(' ')
  let result = []
  for(let i = strArr.length - 1; i >=0; i--) {
    if(strArr[i] == '') continue
    result.push(strArr[i])
  }
  // console.log(result.join(' '))
  return result.join(' ')
};

// reverseWords("a good   example")
// @lc code=end

