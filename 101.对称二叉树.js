/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (!root) return true;
  const TraveNode = (left, right) => {
    // 两个节点都为null时，返回true
    if (!left && !right) return true;
    // 一个节点为null，一个节点不为null时，返回false
    if (left === null && right !== null || left != null && right === null) return false;
    // 两个节点的值不相等时，返回false
    if (left.val !== right.val) return false;
    return TraveNode(left.left, right.right) && TraveNode(left.right, right.left);
  }
  return TraveNode(root.left, root.right);
};
// @lc code=end

