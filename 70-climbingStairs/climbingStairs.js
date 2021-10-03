/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1)
        return 1;
    else if(n == 2)
        return 2;
    else {
        let x = 1, y = 2;
        let result = 0;
        for(let i = 3; i <= n; i++){
            result = x + y;
            x = y;
            y = result;
        }
        return result;
    }
};