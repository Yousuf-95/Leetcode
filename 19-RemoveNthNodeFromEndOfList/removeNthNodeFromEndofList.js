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
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let currentNode = head;
    
    while(currentNode){
        length++;
        currentNode = currentNode.next;
    }
    currentNode = head;
    let previousNode = currentNode;
 
    if(length == 1 && n == 1){
        return null;
    }
    if(length - n == 0)
        return head.next;
    
    while(currentNode){
        if(length == n){
            previousNode.next = currentNode.next;
            break;
        }

        previousNode = currentNode;
        currentNode = currentNode.next;
        length--;
    }
    return head;
};