/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 小于x的链表
  let dummyLow = new ListNode()
  let p1 = dummyLow
  // 大于等于x的链表
  let dummyHigh = new ListNode()
  let p2 = dummyHigh

  while(head) {
    let temp = head.next
    if(head.val < x) {
      p1.next = head
      p1 = p1.next
    } else {
      p2.next = head
      p2 = p2.next
    }
    // 断开原链表中的每个节点的 next 指针
    head.next = null
    head = temp
  }
  p1.next = dummyHigh.next
  return dummyLow.next

};
// @lc code=end

