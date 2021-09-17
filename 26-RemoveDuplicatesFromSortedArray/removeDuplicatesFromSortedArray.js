var removeDuplicates = function(nums) {
    let i = 0, index = 0;
    
    while(i < nums.length) {
        if(nums[index] === nums[index+1]){
            nums.splice(index+1,1);
            continue;
        }
        else{
            index++;
            i++;
        }
    }
    return nums.length;
};