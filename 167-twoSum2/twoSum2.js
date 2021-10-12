/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                // let num2 = Math.max(numbers[i], numbers[j]);
                // let num1 = numbers[i] < num2 ? numbers[i]: numbers[j];
                return i > j? [j+1,i+1] : [i+1, j+1];    
            }
  
        }
    }
};