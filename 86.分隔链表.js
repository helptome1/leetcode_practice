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
var partition = function (head, x) {
  // ------------ 解法一：两个链表结合 ----------------
  // 小于x的链表
  // let dummyLow = new ListNode()
  // let p1 = dummyLow
  // // 大于等于x的链表
  // let dummyHigh = new ListNode()
  // let p2 = dummyHigh

  // while(head) {
  //   let temp = head.next
  //   if(head.val < x) {
  //     p1.next = head
  //     p1 = p1.next
  //   } else {
  //     p2.next = head
  //     p2 = p2.next
  //   }
  //   // 断开原链表中的每个节点的 next 指针
  //   head.next = null
  //   head = temp
  // }
  // p1.next = dummyHigh.next
  // return dummyLow.next

  //  ---------  2. 双指针(快慢指针) ---------------
  // 2.1 初始化节点和快慢指针
  const tempList = new ListNode(0, head)
  let slow = tempList,
    fast = null
  // 2.2 先找到比x小的最后一个节点。让slow指向这个节点
  while (slow != null && slow.next != null) {
    if (slow.next.val >= x) break
    slow = slow.next
  }
  fast = slow
  while (fast != null && fast.next != null) {
    if (fast.next.val < x) {
      // 把这个值存起来了,并把fast.next指向下一个
      const temp = fast.next
      fast.next = fast.next.next

      // slow后面接上这个temp，并往后移动一位
      temp.next = slow.next
      slow.next = temp
      slow = slow.next
    } else {
      fast = fast.next
    }
  }

  return tempList.next
}
// @lc code=end
