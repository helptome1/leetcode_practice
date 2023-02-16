/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 1. 双指针方法

  // let prev = null
  // while (head) {
  //   const next = head.next
  //   head.next = prev
  //   prev = head
  //   head = next
  // }
  // return prev

  // 2. 递归

  if (head == null || head.next == null) {
    //递归终止条件
    return head
  }
  // 1->2->3<-4
  const newHead = reverseList(head.next) //递归调用reverseList
  head.next.next = head //到了递归最后一层的时候，让后面一个节点指向前一个节点
  head.next = null //前一个节点的next置为空
  return newHead //返回最后一个节点
}

const demo = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

reverseList(demo)
// @lc code=end
