/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let resultArray = [];
    let start = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i+1] - nums[i] > 1){
            if(start == i){
                resultArray.push(`${nums[start]}`)
                start = i+1;
            }
            else{
            resultArray.push(`${nums[start]}->${nums[i]}`);
            start = i+1;
            }
        }
        else
            if(!nums[i+1])
                if(i != start)
                    resultArray.push(`${nums[start]}->${nums[i]}`);
                else
                    resultArray.push(`${nums[i]}`);
    }
    return resultArray;
};