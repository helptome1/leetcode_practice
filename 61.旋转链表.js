/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if(!head) return null
  let lastNode = head, n = 0
  while (++n && lastNode.next) {
    lastNode = lastNode.next
  }
  // 把链表形成环
  lastNode.next = head
  k = k % n; //去重，不用循环多次。
  while(++k < n) {
    head = head.next
  }
  let temp = head;
  head = head.next
  temp.next = null
  return head
}

// @lc code=end
