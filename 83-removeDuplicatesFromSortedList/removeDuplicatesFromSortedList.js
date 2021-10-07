/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**d
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    while(current !== null) {
        let temp = current;
        while(temp.next !== null && temp.val === temp.next.val) {
            temp.next = temp.next.next;
        }
        current = current.next;
    }
    return head;
};