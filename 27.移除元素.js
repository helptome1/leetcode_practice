/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length
  while (left < right) {
    if (nums[left] == val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}

// removeElement([1, 2, 2, 1], 1)
// @lc code=end
