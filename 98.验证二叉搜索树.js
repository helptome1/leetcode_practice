/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

// import { BinaryTree } from "./libs/BinaryTree";
// const BinaryTree = require('./libs/BinaryTree')

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 这样解题是错误的，因为没有考虑到二叉树的特点。
// ！！！左侧的节点都小于根节点，右侧的节点都大于根节点
// let res = true
// var isValidBST = function (root) {
//   if (root === null) return
//   if (root.left && root.left > root) {
//     res = false
//     return
//   } 
//   if ( root.right && root.right < root) {
//     res = false
//     return
//   }
//   isValidBST(root.left)
//   isValidBST(root.right)
//   return res
// }

// ---------- right answer ------------
var isValidBST = function (root) {
  return isValid(root, null, null)  
}
// 借助辅助函数，我们把根节点一并传递到下次递归中。
/* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
function isValid(root, min, max) {
  if(root == null) return true
  // 判断当前的值是否在合法的范围内。即：min < root < max
  if(min != null  && root.val <= min.val) return false
  if(max != null && root.val >= max.val) return false

  // 限定左子树的最大值是当前节点的值，进入下一步循环。
  // 限定右子树的最小值是当前节点的值，
  return isValid(root.left, min, root) && isValid(root.right, root, max)
}

// const treeArray = [5, 1, 4, null, null, 3, 6]
// let Tree = new BinaryTree()
// for (let i = 0; i < treeArray.length; i++) {
//   Tree.insert(treeArray[i])
// }

// @lc code=end
