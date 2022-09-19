/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 首先处理字符串，转换大小写
    const sUpper = s.toLowerCase();
    // 定义一个检测是否是字符的正则表达式。
    const reg = new RegExp(/[a-z]/)
    if(!reg.test(sUpper)) return true
    let left = 0, right = sUpper.length - 1;
    while (left <= right) {
        if (!reg.test(sUpper[left])) {
            left++
            continue;
        }
        if (!reg.test(sUpper[right])) {
            right--
            continue;
        }
        if (sUpper[left] != sUpper[right]) return false
        left++;
        right--;
    }
    return true
};

isPalindrome("0P")
// @lc code=end

