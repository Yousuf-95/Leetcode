/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 1) return [];
    let solution = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++){
        let left = i+1, right = nums.length-1;
        while(left < right){
            if(nums[i] + nums[left] + nums[right] == 0){
                solution.push([nums[i], nums[left], nums[right]]);
               
                while(nums[left] == nums[left+1]) left++;
                while(nums[right] == nums[right-1]) right--;
                
                left++;
                right--;   
            }
            else
                (nums[i] + nums[left] + nums[right] < 0) ? left++ : right--;
            
        }
        while(nums[i] == nums[i+1]) i++;
    }
    return solution;
};