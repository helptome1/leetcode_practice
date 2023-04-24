/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const path = []
  const result = []
  function backtarcking(startIndex) {
    if (path.length === 4 && startIndex <= s.length) {
      if (startIndex === s.length) {
        result.push(path.join('.'))
      }
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      const str = s.substring(startIndex, i + 1)
      if (str.length > 3 || +str > 255) break
      if (str.length != 1 && str[0] == '0') break

      path.push(str)
      backtarcking(i + 1)
      path.pop()
    }
  }

  backtarcking(0)

  return result
}
// @lc code=end
