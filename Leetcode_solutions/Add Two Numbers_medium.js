{/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/}
 const addTwoNumbers = (l1, l2, carry = 0) => {
 {/* 1. When there are no nodes and nothing to carry, terminate the list*/}
  if (!l1 && !l2 && !carry) return null;
  {/* 2. Sum what's carried and the node values (anything missing becomes zero) */}
  const sum = carry + (l1 && l1.val) + (l2 && l2.val);
  {/* 3. Make a new list node with the value of the last digit in the sum */}
  const node = new ListNode(sum % 10);
  {/* 4. Recurse with the next nodes, carrying any other digits in the sum */}
  node.next = addTwoNumbers(l1 && l1.next, l2 && l2.next, Math.trunc(sum / 10));
  return node;
 }
