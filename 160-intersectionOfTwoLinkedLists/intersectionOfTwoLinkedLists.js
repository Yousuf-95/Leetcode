/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let mySet = new Set();
    while(headA){
        mySet.add(headA)
        
        headA = headA.next;
    }
    
    while(headB){
        if(mySet.has(headB))
            return headB;
        
        headB = headB.next;
    }
    
    return null;
};