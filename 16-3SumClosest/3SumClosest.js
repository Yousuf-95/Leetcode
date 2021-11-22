/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // if(nums.length < 3) return;
    let closestNum = 0;
    let difference = Number.MAX_SAFE_INTEGER;
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length - 1; i++){
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            let temp = nums[i] + nums[left] + nums[right];
            if(Math.abs(temp - target) < difference){
                closestNum = temp;
                difference = Math.abs(temp - target);
            }
            if (temp < target)
                left++;
            else
                right--;
        }
    }
    return closestNum;
};