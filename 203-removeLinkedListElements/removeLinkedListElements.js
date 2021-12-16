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
var removeElements = function(head, val) {
    let firstNode = new ListNode(0,null);
    firstNode.next = head;
    let currentNode = firstNode;
    while(currentNode.next){
        if(currentNode.next.val === val)
            currentNode.next = currentNode.next.next;
        else
            currentNode = currentNode.next;
    }
    return firstNode.next;
};