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
var swapPairs = function(head) {
    if(!head) return null;
    let newNode = new ListNode(0,head);
    let currentNode = head;
    let previousNode = newNode;

    let diff  = 1;
    
    while(currentNode){
        if(diff == 2){
            let middleNode = previousNode.next;
            middleNode.next = currentNode.next;
            currentNode.next = middleNode;
            previousNode.next = currentNode;
            
            previousNode = previousNode.next.next;
            currentNode = currentNode.next.next;
            diff = 1;
            
        }
        else{
            currentNode = currentNode.next;

            diff++;
        }
    }
    return newNode.next;
};