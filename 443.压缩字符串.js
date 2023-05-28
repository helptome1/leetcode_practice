/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const length = chars.length
  if (length === 1) return 1
  let index = 0, prev = 0
  let count = 1
  while (index < length) {
    if (index < length - 1 && chars[index] === chars[index + 1]) {
      index++
      count++
      continue
    } else {
      if(count > 1) {
        const arr = (count + '').split('')
        chars.push(chars[index], ...arr)
      } else {
        chars.push(chars[index])
      }
      count = 1
      index++
    }
  }

  chars.splice(0, length)
}
compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
// @lc code=end
