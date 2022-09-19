/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length == 1) return nums
  // 双指针解法
  let [left, right] = [0, 0]
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] != 0) {
      nums[left] = nums[i]
      left++;
    }
  }
  console.log(left)
  while (left < nums.length) {
    nums[left] = 0;
    left ++;
  }

  console.log(nums)
}
moveZeroes([0, 1, 0, 3, 12])
// @lc code=end
