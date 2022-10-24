/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
// 解法一:
// var isPalindrome = function (head) {
//   // 使用堆栈解决回文问题。
//   const arr = []
//   while (head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false
//     }
//     left++
//     right--
//   }
//   return true
// }

// 解法二，使用快慢指针解决问题
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head
  let fast = head
  let prev = null
  // 1. 先找到链表的终点，然后这时slow就是中点。中点
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 如果fast不为空，说明链表是奇数
  if (fast !== null) {
    slow = slow.next
  }
  // console.log("slow", slow)
  // 2. 反转后面的链表
  prev = reverse(slow)
  // 把快指针重新指回head
  fast = head
  while (prev) {
    if (fast.val != prev.val) {
      return false
    }
    fast = fast.next
    prev = prev.next
  }
  return true
}

function reverse(head) {
  let newListNode = null
  while (head) {
    const temp = head.next
    head.next = newListNode
    newListNode = head
    head = temp
  }
  return newListNode
}

const demo = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}

// console.log(demo);

const result = isPalindrome(demo)
// console.log("result", result)
// 模仿链表结构
// @lc code=end
