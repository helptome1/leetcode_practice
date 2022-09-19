/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 如果节点为空，直接返回空数组
  if (!root) return [];
  // 定义一个数组，用来存放结果
  const result = [];
  /**
   * 使用栈来解决前序遍历问题。
   * 栈的特点是先进后出。
   */
  // 定义一个栈，用来存放节点
  // const stack = [];
  // // 先将根节点入栈
  // stack.push(root);
  // // 循环，直到栈为空
  // while (stack.length) {
  //   // 将栈顶节点出栈
  //   const node = stack.pop();
  //   // 将节点的值放入数组
  //   result.push(node.val);
  //   // 如果节点的右子节点不为空，将右子节点入栈
  //   if (node.right) stack.push(node.right);
  //   // 如果节点的左子节点不为空，将左子节点入栈
  //   if (node.left) stack.push(node.left);
  // }
  // // 返回结果
  // return result;

  /**
   * 使用递归来解决前序遍历问题。
   */
  const TraveNode = (node) => {
    if (!node) return null
    result.push(node.val);
    TraveNode(node.left)
    TraveNode(node.right)
  }
  TraveNode(root);
  return result;
};
// @lc code=end

