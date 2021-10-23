/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Solution 1 --->
    // let mySet = new Set(nums);
    // if(nums.length > mySet.size)
    //     return true;
    // return false;
    // let previousElement = nums[0];
    
    // Solution 2 --->
    nums.sort();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1])
            return true;
    }
    return false;
};