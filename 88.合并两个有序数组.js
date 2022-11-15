/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 代码的鲁棒性
  if (m == 0) {
    nums2.forEach((item) => {
      nums1.unshift(item)
      nums1.pop()
    })
  }
  while (nums2.length > 0) {
    const temp = nums2.shift()
    for (let i = 0; i < nums1.length; i++) {
      // console.log('nums1', i, m)
      if (nums1[i] >= temp || i > m - 1) {
        nums1.splice(i, 0, temp)
        nums1.pop()
        m++
        break
      }
    }
  }
  console.log(nums1)
}

// merge([1,2,2,3,0,0], 3, [2,5,6], 3)

// @lc code=end
