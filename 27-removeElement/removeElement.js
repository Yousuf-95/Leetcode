/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, index = 0;
    
    while(i < nums.length) {
        if(nums[index] === val){
            nums.splice(index,1);
            continue;
        }
        else{
            index++;
            i++;
        }
    }
    return nums.length;
    
};