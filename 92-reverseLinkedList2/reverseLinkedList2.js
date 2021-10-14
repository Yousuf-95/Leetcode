/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let i = 1; bucket = [], currentNode = head;
    while(currentNode){
        if(i >= left && i <= right)
            bucket.push(currentNode.val)
        i++;
        currentNode = currentNode.next;
    }
    i = 1;
    currentNode = head;
    while(currentNode) {
        if(i >= left && i <= right)
            currentNode.val = bucket.pop();
        currentNode = currentNode.next;
        i++;    
    }
    return head;
};