/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
//-----------  first methods to solve. ------------

// var maxDepth = function(root) {
//   if(root == null) return 0;
//   const leftDeep = maxDepth(root.left);
//   const rightDeep = maxDepth(root.right);
//   let res = Math.max(leftDeep, rightDeep) + 1
//   return res
// };


//------------ the second method to solve -----------

// 记录最大的深度
let res = 0;
// 记录循环时的深度
let deep = 0;
var maxDepth = function(root) {
  travel(root)
  return res
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
function travel (root) {
  if(root == null) return
  // 前序遍历时，给当前节点深度+1
  deep++;
  if (root.left == null && root.right == null) {
    res = Math.max(res, deep);
  }
  travel(root.left)
  travel(root.right)
  // 注意当前节点走完后，需要减掉当前节点的深度。
  deep--;
}
// @lc code=end

