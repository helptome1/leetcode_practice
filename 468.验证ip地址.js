/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  // 判断是ipv4格式还是ipv6
  if (queryIP.indexOf('.') != -1) {
    var items = queryIP.split('.')
    if (items.length != 4) return 'Neither'
    var iPv4Reg = /^(\d){1,3}$/
    var isIpv4 = items.every((item) => {
      if (item.length != 1 && item.slice(0, 1) == '0') {
        return false
      }
      // 这里使用&&时注意大于小于号的使用，运算符的优先级
      return iPv4Reg.test(item) && 0 <= Number(item) && Number(item) <= 255
    })
    return isIpv4 ? 'IPv4' : 'Neither'
  } else {
    let iPv6Reg = /^([a-fA-F0-9]){1,4}$/
    var items = queryIP.split(':')
    if (items.length != 8) return 'Neither'
    var isIpv6 = items.every((item) => {
      return 1 <= item.length && item.length <= 4 && iPv6Reg.test(item)
    })
    return isIpv6 ? 'IPv6' : 'Neither'
  }
}
// @lc code=end
