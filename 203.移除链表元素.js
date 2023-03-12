/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 递归法
  // if (head === null) return head
  // head.next = removeElements(head.next, val)
  // return head.val == val ? head.next : head

  // 迭代法
  // 关键是设置一个虚拟头节点。{val: 0, next: head}
  const tempList = new ListNode(0, head)

  let cur = tempList
  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return tempList.next
}
// @lc code=end
