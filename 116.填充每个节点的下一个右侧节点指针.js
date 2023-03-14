/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return root

  function dfs(root) {
    if (root.left == null && root.right == null) return root
    // 1. 跟节点的左节点指向右节点。
    root.left.next = root.right
    // 2. 如果root有指向的节点，那么就把root.right 指向root.next.left
    if (root.next) {
      root.right.next = root.next.left
    }
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return root
}
// @lc code=end
