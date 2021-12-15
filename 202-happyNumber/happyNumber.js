/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let bucket = [];
    let happyNumber = 0;
    while(n !== 1 && !bucket[n]){
        bucket.push(n);
        n = n.toString().split('');
        for(let i = 0; i < n.length; i++) {
            happyNumber +=  (+n[i])**2;
        }
        n = happyNumber;
        happyNumber = 0;
    }
    return n == 1 ? true : false;
};