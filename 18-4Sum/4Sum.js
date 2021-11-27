/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
    if(nums.length == 0 || nums.length < 3) return [];
    let solution = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            let left = j+1, right = nums.length-1;
            while(left < right){
                if(nums[i] + nums[j] + nums[left] + nums[right] == target){
                    solution.push([nums[left],nums[i],nums[j],nums[right]]);
                    while(nums[left] == nums[left+1]) left++;
                    while(nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                }
                else
                    (nums[i] + nums[j] + nums[left] + nums[right]) < target ? left++ : right--;
            }
            while(nums[i] == nums[i+1]) i++;
            while(nums[j] == nums[j+1]) j++;
        }
    }
    return solution;
};