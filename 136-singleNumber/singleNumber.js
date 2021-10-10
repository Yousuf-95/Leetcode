/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        nums.splice(i,1);
        let index = nums.includes(currentValue);
        if(index)
            nums.splice(i,0,currentValue);
        else
            return currentValue;
    }
};