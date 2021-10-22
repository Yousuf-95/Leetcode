/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let numberOfOnes = 0;
    n = n.toString(2).split('');
    for(let i = 0; i < n.length; i++) {
        if(n[i] == 1)
            numberOfOnes++;
    }
    return numberOfOnes;
};