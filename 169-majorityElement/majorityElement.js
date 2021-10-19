/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = -1, currentCount = 1, maxNumber = -1;
    if(nums.length == 1)
        return nums[0];
    nums.sort();
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] != nums[i]){
            currentCount = 1;
        }
        else
            currentCount++;
        
        if(currentCount > max){
            max = currentCount;
            maxNumber = nums[i];
            if(max > nums.length/2)
                return maxNumber
        }
    }
    return maxNumber;
};