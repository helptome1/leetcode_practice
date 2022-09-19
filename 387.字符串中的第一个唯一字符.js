/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let len = s.length
  let map = new Map()

  // 使用一个 Map 将字符是否重复记录下来，重复则值为true，不重复则值为false
  for (let item of s) {
    if (map.get(item) === undefined) {
      map.set(item, false)
    } else {
      map.set(item, true)
    }
  }

  for (let i = 0; i < len; i++) {
    if (map.get(s[i]) === false) {
      return i
    }
  }

  return -1
}
const index = firstUniqChar('leetl')
console.log(index)
// @lc code=end
