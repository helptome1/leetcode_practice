/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // const sLen = s.length,
  //   tLen = t.length
  // let isEqual = true
  // if (sLen != tLen) return false

  // let i = 0
  // let sMap = new Map()
  // let tMap = new Map()
  // while (i < sLen) {
  //   if (!sMap.has(s[i])) {
  //     sMap.set(s[i], 1)
  //   } else {
  //     sMap.set(s[i], sMap.get(s[i]) + 1)
  //   }
  //   if (!tMap.has(t[i])) {
  //     tMap.set(t[i], 1)
  //   } else {
  //     tMap.set(t[i], tMap.get(t[i]) + 1)
  //   }
  //   i++
  // }
  // sMap.forEach((val, key) => {
  //   if(tMap.get(key) != val) {
  //     isEqual = false;
  //   }
  // })
  // return isEqual

  let sArr = s.split('')
  let tArr = t.split('')
  let isEqual = true
  if (sArr.length != tArr.length) return false


}

const isTrue = isAnagram('anagrmm', 'nagaram')
console.log(isTrue)
// @lc code=end
