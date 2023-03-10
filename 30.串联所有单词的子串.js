/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 使用滑动窗口的解决问题
var findSubstring = function (s, words) {
  // 获取数组的长度。
  const wordsLen = words.length
  const wordLength = words[0].length
  const sliderLength = wordsLen * wordLength
  let sliderWin = []
  let res = []
  for (let i = 0; i < s.length; i++) {
    if (i + sliderLength > s.length) break
    // 调整窗口的位置
    sliderWin = s.substring(i, sliderLength + i)
    // 获取窗口中第一个字符的长度，如果不在words中直接下次循环
    const firstWord = sliderWin.slice(0, wordLength)
    if (words.indexOf(firstWord) < 0) continue
    // 复制words，用来剪切数组，匹配字符串
    const wordsCopy = [...words]
    // 标识为
    let isTrue = true
    // 内层循环遍历
    for (let l = 0; l < sliderLength; l += wordLength) {
      const word = sliderWin.slice(l, l + wordLength)
      const wordIndex = wordsCopy.indexOf(word)
      if (wordIndex < 0) {
        isTrue = false
        break
      }
      // 剪切数组
      wordsCopy.splice(wordIndex, 1)
    }
    if (isTrue) {
      res.push(i)
    }
  }
  return res
}
findSubstring('lingmindraboofooowingdingbarrwingmonkeypoundcake', ['fooo', 'barr', 'wing', 'ding', 'wing'])
// @lc code=end
