/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  if (root == null) return []
  // bfs 广度优先遍历
  let queue = [],
    res = []
  queue.push(root)
  while (queue.length != 0) {
    let tempArr = []
    for (let i = 0; i < queue.length; i++) {
      const firstNode = queue.shift()
      tempArr.push(firstNode)
      firstNode.left && queue.push(firstNode.left)
      firstNode.right && queue.push(firstNode.right)
    }
    res.push(tempArr)
  }
  return res
}
// @lc code=end
