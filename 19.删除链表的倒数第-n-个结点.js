/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 使用快慢指针来解决倒数的问题
  // 1.先让快指针走n-1步
  let fast = head
  for (let i = 1; i <= n - 1; i++) {
    fast = fast.next
  }
  // 2.当fast走到头时，slow刚好是倒数第n个节点。
  let slow = head
  // 记录slow
  let pre = null
  while (fast.next) {
    pre = slow
    fast = fast.next
    slow = slow.next
  }
  // 当你删除的是第一个head时。
  if (!pre) {
    return slow.next
  } else {
    pre.next = slow.next
  }
  return head
}
// @lc code=end
