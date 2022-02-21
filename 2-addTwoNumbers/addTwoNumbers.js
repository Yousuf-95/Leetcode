/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) return '';
    let myNode = new ListNode();
    let head = myNode;
    let carry = 0;
    while(l1|| l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = 0;
        if(sum >= 10){
            sum = sum % 10;
            carry = 1;
        }
        myNode.next = new ListNode(sum,null);
        myNode = myNode.next;
        l1 = l1 == null ? null : l1.next;
        l2 = l2 == null ? null : l2.next;
    }
    if(carry > 0){
        myNode.next = new ListNode(carry,null);
    }
    
    return head.next;
};