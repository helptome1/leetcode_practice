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
  let hash = s.split('')
  for (let i = 0; i < t.length; i++) {
    let index = hash.indexOf(t[i])
    console.log('index', index)
    if (index >= 0) {
      hash.splice(index, 1)
    } else {
      return false
    }
  }
  console.log(hash)

  if (hash.length === 0) return true
}

const isTrue = isAnagram('ab', 'a')
console.log(isTrue)
// @lc code=end
