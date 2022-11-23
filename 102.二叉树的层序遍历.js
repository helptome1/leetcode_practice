/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if(!res) return res;
  // 创建一个队列，把根元素放进去
  let deepIndex = 0;
  
};

// 初始话一个树
function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
// 二叉树：[3,9,20,null,null,15,7]
let tree = new TreeNode(3,new TreeNode(9),new TreeNode(20, new TreeNode(15), new TreeNode(7)));
levelOrder(tree)
// @lc code=end

