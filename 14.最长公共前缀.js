/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const leastWord = {
    length: strs[0].length,
    index: 0
  }
  // 1.找出数组中的最短字符串
  strs.forEach((item, index) => {
    if (item.length < leastWord.length) {
      leastWord.index = index
      leastWord.length = item.length
    }
  })
  // 2. 用倒叙查找相同的字符串前缀
  const theLeastWord = strs[leastWord.index]
  let result = ''
  for (let i = theLeastWord.length; i > 0; i--) {
    const word = theLeastWord.substring(0, i)
    const isInclude = strs.every((item) => {
      const itemStr = item.substring(0, word.length)
      return itemStr.includes(word)
    })
    if (isInclude) {
      result = word
      break
    }
  }
  return result
}

// const result = longestCommonPrefix(['flower', 'flow', 'flight'])
const result = longestCommonPrefix(["reflower","flow","flight"])
console.log('result', result)
// @lc code=end
