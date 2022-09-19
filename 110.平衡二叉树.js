/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 退出条件
  // 1. 左右子树都为空
  if (!root) return true
  // 2. 左右子树中有一个不是平衡二叉树，那么这个树就不是平衡二叉树
  // if (!isBalanced(root.left) || !isBalanced(root.right)) return false

  // 单层逻辑
  // 1. 计算左子树深度
  // let leftDepth = findDeep(root.left)
  // 2. 计算右子树深度
  // let rightDepth = findDeep(root.right)
  // 3. 判断左右子树深度差是否大于1
  // if (Math.abs(findDeep(root.left) - findDeep(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(findDeep(root.left) - findDeep(root.right)) <= 1
}
  // 递归逻辑findDeep函数, 计算左右子树的深度
  var findDeep = (node) => {
    if (!node) return 0
    // 1. 计算左子树深度
    let left = findDeep(node.left)
    // 2. 计算右子树深度
    let right = findDeep(node.right)
    // 3. 返回左右子树深度较大的深度
    return Math.max(left, right) + 1
  }

// @lc code=end
