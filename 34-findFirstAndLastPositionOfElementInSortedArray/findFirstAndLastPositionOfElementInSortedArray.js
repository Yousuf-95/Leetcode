/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];
    if(target < nums[0] || target > nums[nums.length-1] || nums.length === 0) return result;
    
    for(let i=0; i < nums.length; i++){
        if(nums[i] === target && result[0] === -1)
            result.fill(i);
        else if(nums[i] === target && result[0] !== -1)
            result[1] = i;
    }
    return result;
};