/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()

  for (let str of strs) {
    let strArr = Array.from(str) // 转成数组
    strArr.sort() // 排序
    const key = strArr.toString()
    if (!map.has(key)) {
      map.set(key, [str])
    } else {
      map.get(key).push(str)
    }
  }
  return Array.from(map.values())

}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])

// @lc code=end
